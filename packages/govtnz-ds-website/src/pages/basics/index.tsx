// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../../commons/styles/ds/themed-A.scss';

// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import BasicsPage from '../../components/basicsPage';
// import BaseCode from '../../components/baseCode'
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><H1 styleSize="xlarge" id="main-heading">Basics</H1>
<P>Basic design elements apply to all parts of a website. Key basic elements provided by the New Zealand Government Design System (NZGDS) include typography and colour guidance for interaction design. Additional basic elements are coming soon.</P>
<P>Browse available basics via the sidebar menu if you’re on a desktop, or the main menu if you’re using a mobile.</P>
</React.Fragment>

export default function Code(props) {
  return (
    <BasicsPage
      title={"index"}
      id={"index"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
