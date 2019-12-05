// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '../../commons/styles/ds/themed-P.scss';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '../../commons/styles/ds/themed-H2.scss';
import components__Fieldset from '../../commons/examples/components__Fieldset';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';
import '../../commons/styles/ds/themed-Button.scss';
import '../../commons/styles/ds/themed-CaptionL.scss';

const PageContent = (props) => <React.Fragment><P styleSize="large">
    The date input component consists of three grouped text fields that invite users to enter a day, a month, and a year.  This is the easiest way for users to enter dates they know well.
</P>

<H2 styleSize="large" id="examples">Examples</H2>
<p>Interact with the example to see how it works.</p>
<ExampleContainer>
    <Example  code={components__Fieldset[0]} iframeProps={{
        id:"iframe_componentsFieldset0",
        className: "example__iframe",
        src:"/components/Fieldset__example0.html",
        title:"Example: Fieldset address",
        height: 490
      }}></Example>
</ExampleContainer>

<h2 id="when-to-use-this-component">When to use this component</h2>
<p>Use the fieldset component when you need to show a relationship between multiple form inputs. For example, you may need to group a set of text inputs into a single fieldset when asking for an address.</p>
<p>If you’re using the <Link to="./Radios">radio buttons</Link>, <Link to="./Checkboxes">checkboxes</Link> or <Link to="./Date">date input</Link> components, the fieldset component will already be included.</p>
<h2 id="how-it-works">How it works</h2>
<p>The first element inside a <code>&lt;fieldset&gt;</code> must be a <code>&lt;legend&gt;</code> which describes the group of inputs. This could be a question, such as ‘What is your current address?’ or a statement like ‘Personal details’.</p>
<p>If you’re asking just one question per page as recommended, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading, as shown in the example below. This is good practice as it means that users of screen readers will only hear the contents once.</p>
<ExampleContainer>
    <Example  code={components__Fieldset[1]} iframeProps={{
        id:"iframe_componentsFieldset1",
        className: "example__iframe",
        src:"/components/Fieldset__example1.html",
        title:"Example: Fieldset address as page heading",
        height: 208
      }}></Example>
</ExampleContainer>

<p>On question pages containing a group of inputs, including the question as the legend helps users of screen readers to understand that the inputs are all related to that question.</p>
<p>Include any general help text which is important for filling in the form and cannot be written as hint text in the legend, but try to keep it as concise as possible.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Fieldset"}
      id={"Fieldset"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
