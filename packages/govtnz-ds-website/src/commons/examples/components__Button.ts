// @autogenerated


export default [
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Button from \"@govtnz/ds/build/mustache/Button.mustache\";\n\n// The variables Button are all strings that are mustache templates.\n\nexport default `${Mustache.render(Button, {\n  type: `Button`,\n  children: `Save and continue`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => <Button type=\"Button\">Save and continue</Button>;\n",
    "react-ts": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => <Button type=\"Button\">Save and continue</Button>;\n",
    "react-js-styled-components": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js-styled-components/Button\";\n\nexport default () => <Button type=\"Button\">Save and continue</Button>;\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts-styled-components/Button\";\n\nexport default () => <Button type=\"Button\">Save and continue</Button>;\n",
    "vue-js": "<template>\n  <c-button type=\"Button\">\n    Save and continue\n  </c-button>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-js/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "vue-ts": "<template>\n  <c-button type=\"Button\">\n    Save and continue\n  </c-button>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-ts/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Button.css\nOR in Sass (SCSS): Button.scss\n-->\n<button class=\"g-button\" type=\"button\">Save and continue</button>\n",
    "css": "",
    "twig-embed": "{% embed \"Button.html.twig\"  with {'type':'Button', 'children':'Save and continue'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Button from \"@govtnz/ds/build/mustache/Button.mustache\";\n\n// The variables Button are all strings that are mustache templates.\n\nexport default `${Mustache.render(Button, {\n  type: `Button`,\n  level: `secondary`,\n  children: `Find address`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <Button type=\"Button\" level=\"secondary\">\n    Find address\n  </Button>\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <Button type=\"Button\" level=\"secondary\">\n    Find address\n  </Button>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js-styled-components/Button\";\n\nexport default () => (\n  <Button type=\"Button\" level=\"secondary\">\n    Find address\n  </Button>\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts-styled-components/Button\";\n\nexport default () => (\n  <Button type=\"Button\" level=\"secondary\">\n    Find address\n  </Button>\n);\n",
    "vue-js": "<template>\n  <c-button type=\"Button\" level=\"secondary\">\n    Find address\n  </c-button>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-js/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "vue-ts": "<template>\n  <c-button type=\"Button\" level=\"secondary\">\n    Find address\n  </c-button>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-ts/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Button.css\nOR in Sass (SCSS): Button.scss\n-->\n<button class=\"g-button g-button--secondary\" type=\"button\">Find address</button>\n",
    "css": "",
    "twig-embed": "{% embed \"Button.html.twig\"  with {'type':'Button', 'level':'secondary', 'children':'Find address'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Button from \"@govtnz/ds/build/mustache/Button.mustache\";\n\n// The variables Button are all strings that are mustache templates.\n\nexport default `${Mustache.render(Button, {\n  type: `Button`,\n  children: `Save and continue`\n})}${Mustache.render(Button, {\n  type: `Button`,\n  level: `secondary`,\n  children: `Save as draft`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <React.Fragment>\n    <Button type=\"Button\">Save and continue</Button>\n    <Button type=\"Button\" level=\"secondary\">\n      Save as draft\n    </Button>\n  </React.Fragment>\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <React.Fragment>\n    <Button type=\"Button\">Save and continue</Button>\n    <Button type=\"Button\" level=\"secondary\">\n      Save as draft\n    </Button>\n  </React.Fragment>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js-styled-components/Button\";\n\nexport default () => (\n  <React.Fragment>\n    <Button type=\"Button\">Save and continue</Button>\n    <Button type=\"Button\" level=\"secondary\">\n      Save as draft\n    </Button>\n  </React.Fragment>\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts-styled-components/Button\";\n\nexport default () => (\n  <React.Fragment>\n    <Button type=\"Button\">Save and continue</Button>\n    <Button type=\"Button\" level=\"secondary\">\n      Save as draft\n    </Button>\n  </React.Fragment>\n);\n",
    "vue-js": "<template>\n  <c-button type=\"Button\">\n    Save and continue\n  </c-button>\n  <c-button type=\"Button\" level=\"secondary\">\n    Save as draft\n  </c-button>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-js/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "vue-ts": "<template>\n  <c-button type=\"Button\">\n    Save and continue\n  </c-button>\n  <c-button type=\"Button\" level=\"secondary\">\n    Save as draft\n  </c-button>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-ts/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Button.css\nOR in Sass (SCSS): Button.scss\n-->\n<button class=\"g-button\" type=\"button\">Save and continue</button>\n<button class=\"g-button g-button--secondary\" type=\"button\">\n  Save as draft\n</button>\n",
    "css": "",
    "twig-embed": "{% embed \"Button.html.twig\"  with {'type':'Button', 'children':'Save and continue'} only %}{% endembed %}{% embed \"Button.html.twig\"  with {'type':'Button', 'level':'secondary', 'children':'Save as draft'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Button from \"@govtnz/ds/build/mustache/Button.mustache\";\n\n// The variables Button are all strings that are mustache templates.\n\nexport default `${Mustache.render(Button, {\n  type: `Button`,\n  level: `warning`,\n  children: `Delete account`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <Button type=\"Button\" level=\"warning\">\n    Delete account\n  </Button>\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <Button type=\"Button\" level=\"warning\">\n    Delete account\n  </Button>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js-styled-components/Button\";\n\nexport default () => (\n  <Button type=\"Button\" level=\"warning\">\n    Delete account\n  </Button>\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts-styled-components/Button\";\n\nexport default () => (\n  <Button type=\"Button\" level=\"warning\">\n    Delete account\n  </Button>\n);\n",
    "vue-js": "<template>\n  <c-button type=\"Button\" level=\"warning\">\n    Delete account\n  </c-button>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-js/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "vue-ts": "<template>\n  <c-button type=\"Button\" level=\"warning\">\n    Delete account\n  </c-button>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-ts/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Button.css\nOR in Sass (SCSS): Button.scss\n-->\n<button class=\"g-button g-button--warning\" type=\"button\">Delete account</button>\n",
    "css": "",
    "twig-embed": "{% embed \"Button.html.twig\"  with {'type':'Button', 'level':'warning', 'children':'Delete account'} only %}{% endembed %}"
  },
  {
    "mustache": "// Developer note: ensure your \".mustache\" files are imported as plain text. In Webpack you might use https://github.com/webpack-contrib/raw-loader\nimport Mustache from \"mustache\";\nimport Button from \"@govtnz/ds/build/mustache/Button.mustache\";\n\n// The variables Button are all strings that are mustache templates.\n\nexport default `${Mustache.render(Button, {\n  type: `Button`,\n  disabled: true,\n  children: `Save and continue`\n})}`;\n",
    "silverstripe-components": "",
    "react-js": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <Button type=\"Button\" disabled>\n    Save and continue\n  </Button>\n);\n",
    "react-ts": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts/Button\";\nimport \"@govtnz/ds/build/css/Button.css\"; // or @govtnz/ds/build/scss/Button.scss\n\nexport default () => (\n  <Button type=\"Button\" disabled>\n    Save and continue\n  </Button>\n);\n",
    "react-js-styled-components": "import React from \"react\";\nimport Button from \"@govtnz/ds/build/react-js-styled-components/Button\";\n\nexport default () => (\n  <Button type=\"Button\" disabled>\n    Save and continue\n  </Button>\n);\n",
    "react-ts-styled-components": "import * as React from \"react\";\nimport * as Button from \"@govtnz/ds/build/react-ts-styled-components/Button\";\n\nexport default () => (\n  <Button type=\"Button\" disabled>\n    Save and continue\n  </Button>\n);\n",
    "vue-js": "<template>\n  <c-button type=\"Button\" disabled>\n    Save and continue\n  </c-button>\n</template>\n<script>\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-js/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "vue-ts": "<template>\n  <c-button type=\"Button\" disabled>\n    Save and continue\n  </c-button>\n</template>\n<script lang=\"ts\">\nimport Vue from \"vue\";\nimport Button from \"@govtnz/ds/build/vue-ts/Button\";\n\nexport default { components: { \"c-button\": Button } };\n</script>\n",
    "scss": "",
    "html": "<!--\nRemember to add these styles:\nin CSS: Button.css\nOR in Sass (SCSS): Button.scss\n-->\n<button\n  class=\"g-button g-button--disabled\"\n  type=\"button\"\n  aria-disabled\n  disabled\n>\n  Save and continue\n</button>\n",
    "css": "",
    "twig-embed": "{% embed \"Button.html.twig\"  with {'type':'Button', 'disabled':'true', 'children':'Save and continue'} only %}{% endembed %}"
  }
]