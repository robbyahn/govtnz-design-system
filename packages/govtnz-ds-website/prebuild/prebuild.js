const fs = require('fs');
const rmfr = require('rmfr');
const path = require('path');
const { startCase, uniq } = require('lodash');
const glob = require('glob-promise');
const mkdirp = require('mkdirp');
const {
  autogeneratedFileSignature,
  generatePage,
  // generateComponentPages,
  generateContentPages,
} = require('./markdown-page-generator');
const {
  insertTemplate,
  cleanUp,
  writeFile,
  removeMatch,
  pageContentComponentSignature,
} = require('./utils');

// We want to use Gatsby to dynamically generate pages for each
// component in a release.
//
// These components should only import the JavaScript/etc relating
// to their component, not others.
//
// The conventional Gatsby way of doing that would be to use
// gatsby-node.js and createPage() but createPage can't be given
// React components (functions), only primitive types (strings,
// booleans, maps, etc.).
//
//    also, as an aside...
//
//    the environment that runs gatsby-node.js is Node not
//    Babel-Node so ES Modules don't work, only Common JS modules,
//    which means JSX in them doesn't work. Pre-transpiling
//    the components to Common JS does result in functions that can be
//    require()d but then createPage() still filters non-primitive
//    types so we can't dynamically pass React components AKA functions
//    to generated pages so we're back to square one.
//
//    And of course the import CSS (converted to require('something.css') )
//    doesn't work because that only works in the context of WebPack or
//    equivalent, not plain Node, so even if React components could be
//    passed to createPage we'd need to pass a string of CSS and
//    somehow attach that (via React-Helmet?) but anyway that's all academic
//    because it doesn't actually work)
//
// Another way would be to import ALL design system components from the
// createPage `component` prop (the target component) and then pass a
// string to choose the component, perhaps by named export. This works! :)
// But there is no code-splitting :( And as there might be 100+ components
// this results in massive download times, so this doesn't work acceptably.
//
// So then we tried importing all components as lazy-loaded components
// with import() but the Gatsby serverside generation can't wait for
// promises to resolve within the target component... it mounts and calls
// a render method, and Gatsby wants gatsby-node.js to do all the async
// stuff and then the target component to just render, so that doesn't
// work either.
//
// All of this means that it's far simpler to codegen some pages -- to
// do code generation of pages-- under `/pages/` before running
// `gatsby build`, and that's what this prebuild.js file is.
//
// That way we can generate typescript files based on a template that
// imports the correct thing. This sounds hacky but it's the lesser evil,
// by far.
//
// If anyone has any better ideas though, let us know.
//

const main = async () => {
  // Step 0. Delete any autogenerated files
  const allPagesPattern = path.resolve(__dirname, '..', 'src/**');
  const allPagesPaths = (await glob(allPagesPattern)).filter((aPath) => {
    return aPath.match(/\.tsx?$/);
  });

  let filesToDelete = [];
  await Promise.all(
    allPagesPaths.map(async (pagePath) => {
      const data = await fs.promises.readFile(pagePath, { encoding: 'utf-8' });
      if (data.includes(autogeneratedFileSignature)) {
        filesToDelete.push(pagePath);
      }
    })
  );
  const tmpDir = path.resolve(__dirname, '..', '.tmp');
  await rmfr(tmpDir);

  // Step 1. Get the codegen templates
  const componentsIndexTemplatePath = path.resolve(
    __dirname,
    '..',
    'src/commons/templates/components-index-template.tsx'
  );
  const componentsIndexTemplate = await fs.promises.readFile(
    componentsIndexTemplatePath,
    {
      encoding: 'utf-8',
    }
  );

  // Step 2. Get ALL the release files
  const releaseSrcPath = path.resolve(
    __dirname,
    '../../',
    'govtnz-ds/build_src'
  );
  const releasePath = path.resolve(__dirname, '../../', 'govtnz-ds/build');
  const allComponentsPattern = releasePath + '/**';
  const allComponents = (await glob(allComponentsPattern)).filter((aPath) => {
    return (
      !aPath.includes('.pdf') &&
      !aPath.includes('.json') &&
      !aPath.includes('/static/') &&
      !aPath.match(/\/index.[a-z]+$/) && // because it doesn't export a React component
      !aPath.match(/\/indexNotLazy.[a-z]+$/) && // because it doesn't export a React component
      aPath.match(/\.[a-zA-Z]+$/) && // not a directory... yeah checking for file extensions isn't generally reliable but in our case it's a naming convention within the project's files
      !aPath.includes('_settings.') && // ie, "_settings.scss", "_settings.md", "_settings.json"
      !aPath.includes('README.md')
    );
  });

  const metatemplateInputsPath = path.join(
    releaseSrcPath,
    '.metatemplate-inputs.json'
  );
  const metatemplateInputsJson = await fs.promises.readFile(
    metatemplateInputsPath,
    {
      encoding: 'utf-8',
    }
  );
  const metaTemplateInputsById = JSON.parse(metatemplateInputsJson);

  await mkdirp(path.resolve(__dirname, '..', 'src/pages/components'));

  // Load all relevant files as text
  const templateFormatsById = allComponents.reduce((templatesByType, aPath) => {
    const extension = path.extname(aPath);
    const name = path.basename(aPath, extension);

    const dir = path.dirname(aPath);

    const filename = `${name}${extension}`;
    const templateType = path.basename(dir);

    const data = fs.readFileSync(path.join(dir, filename), {
      encoding: 'utf-8',
    });

    return {
      ...templatesByType,
      [name]: {
        ...templatesByType[name],
        [templateType]: {
          extension,
          data,
        },
      },
    };
  }, {});

  const keys = Object.keys(templateFormatsById);

  const allTemplateIds = keys.map((templateId) => {
    return {
      name: templateId[templateId] || startCase(templateId),
      importName: templateId,
    };
  });

  // filesToDelete = await generateComponentPages(
  //   templateFormatsById,
  //   filesToDelete,
  //   metaTemplateInputsById
  // )

  const [indexImports, generatedComponentIndexPage] = await generatePage(
    'components',
    'index',
    metaTemplateInputsById,
    templateFormatsById
  );

  const componentsIndex = insertTemplate(
    componentsIndexTemplate,
    {},
    uniq(indexImports).join('')
  ).replace(
    pageContentComponentSignature,
    `const PageContent = (props) => ${generatedComponentIndexPage}`
  );
  const componentsIndexPath = path.resolve(
    __dirname,
    '..',
    'src/pages/components/index.tsx'
  );
  await writeFile(componentsIndexPath, componentsIndex);
  filesToDelete = removeMatch(filesToDelete, componentsIndexPath);

  filesToDelete = await generateContentPages(
    'basics',
    templateFormatsById,
    filesToDelete,
    metaTemplateInputsById
  );

  filesToDelete = await generateContentPages(
    'components',
    templateFormatsById,
    filesToDelete,
    metaTemplateInputsById
  );

  filesToDelete = await generateContentPages(
    'patterns',
    templateFormatsById,
    filesToDelete,
    metaTemplateInputsById
  );

  filesToDelete = await generateContentPages(
    'community',
    templateFormatsById,
    filesToDelete,
    metaTemplateInputsById
  );

  filesToDelete = await generateContentPages(
    'about',
    templateFormatsById,
    filesToDelete,
    metaTemplateInputsById
  );

  await cleanUp(filesToDelete);
};

const nvmVersion = fs
  .readFileSync(path.resolve(__dirname, '../../..', '.nvmrc'), {
    encoding: 'utf-8',
  })
  .replace('v', '') // nvmrc has semver which could start with letter "v".
  .trim();

if (nvmVersion !== process.version.replace('v', '')) {
  console.error(
    `You're running Node version ${process.version} but we require ${nvmVersion}. Please install NVM and run \`nvm use\` to switch Node versions.`
  );
  process.exit(1);
}

main();
