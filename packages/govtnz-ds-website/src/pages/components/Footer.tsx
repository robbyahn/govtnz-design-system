// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2';
import '../../commons/styles/ds/themed-H2.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li';
import '../../commons/styles/ds/themed-Li.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../../commons/styles/ds/themed-A.scss';
import components__Footer from '../../commons/examples/components__Footer';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import MainNavMobileMenuContext from '../../commons/MainNavMobileMenuContext';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">The footer provides links to copyright, contact and privacy information about your website.</P>

<H2 styleSize="large" id="example">Example</H2>
<P>Interact with the example to see how it works.</P>
<ExampleContainer>
    <Example  code={components__Footer[0]} iframeProps={{
        id:"iframe_componentsFooter0",
        className: "example__iframe",
        src:"/components/Footer__example0.html",
        title:"Example: Footer",
        height: 272
      }}></Example>

</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<P>Use the footer at the bottom of every page of your website.</P>
<h2 id="how-it-works">How it works</h2>
<P>The footer component is a container that includes links to:</P>
<Ul>
<Li>Govt.nz using the English or te reo Māori version of the All-of-Government brand lockup</Li>
<Li>your site&#39;s contact information, copyright and privacy statements (link targets are for you to set).</Li>
</Ul>
<P>Including these links helps your website meet several requirements of the <A className="g-link"  href="https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-usability-standard-1-3/">Web Usability Standard</A> for public facing sites. For internally facing websites, the above requirements do not apply and the links can be safely removed without failing the Web Usability Standard.</P>
<h2 id="credit">Credit</h2>
<P>Guidance, original HTML and CSS derived from <A className="g-link"  href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</A>.</P>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Footer"}
      id={"Footer"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
