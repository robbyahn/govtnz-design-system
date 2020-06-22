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
import components__Alerts from '../../commons/examples/components__Alerts';
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

const PageContent = (props) => <React.Fragment><P styleSize="large">Page alerts attract users’ attention to important information or changes on a page.</P>

<H2 styleSize="large" id="when-to-use-it">When to use it</H2>
<p>Use the page alerts component to inform users of:</p>
<Ul bulleted>
<Li>important information</Li>
<Li>changes on a page</Li>
<Li>successful or unsuccessful completion of a task.</Li>
</Ul>
<p>They should be relevant and as minimally disruptive as possible.</p>
<h2 id="when-not-to-use-it">When not to use it</h2>
<p>Page alerts should be used sparingly. If used too frequently, they can create a disruptive experience for users. Overuse may also lead to users becoming desensitised to the alerts and missing or ignoring important information.</p>
<p>The page alerts component should not be used for site or system-wide alerts. Its role is to notify users on important information or changes on a page, rather than site or system-wide changes.</p>
<p>Site and system-wide alerts will be developed as part of the banner component during the Design System’s beta phase.</p>
<h2 id="how-it-works">How it works</h2>
<p>All alerts use a colour and icon that corresponds with their message intent. The alert type — information, warning, success, or error — is communicated to all users by:</p>
<Ul bulleted>
<Li>the visual appearance, including the icon and colour</Li>
<Li>the first word of the alert&#39;s heading, for example, ‘Warning’.</Li>
</Ul>
<p>Changing the word at the start of the alert heading, or removing it, could make the alert less understandable, and therefore less accessible, to some users. If the type or strength of the alert is not indicated in text or in some other way for assistive technology users, it will also fail the <a href="https://www.digital.govt.nz/web-accessibility-standard/">NZ Government Web Accessibility Standard</a>.</p>
<p>Success and error summary alert messages appear at the top of a page following a submit action. They should give users clear, descriptive next steps.</p>
<p>Information and warning alert messages can appear at the top of the page or in the body of the content. If used in the body, alert messages should appear next to the content they relate to.</p>
<h3 id="static-alerts">Static alerts</h3>
<p>Static alerts are added as part of a new page or view after a <a href="https://www.w3.org/TR/WCAG21/#dfn-change-of-context">change of context</a>, such as following a link or submitting a form. These are considered static because they remain unchanged unless there is another change of context.</p>
<p>Information and warning alerts can be used in a wide range of scenarios. Success and error summary alerts are only ever used following a form submission, which is a change of context for the user. These alerts will always be static and part of a new page or view when it is loaded.</p>
<p>Additionally, when the new page or view is first loaded, the Design System user must ensure that focus is moved to the success or error summary alert. This will cause it to be announced automatically by screen reader software, letting the user know the status of their form submission and what, if anything, they need to do to continue.</p>
<p>The Design System user should also update the <code>title</code> element to start with &quot;Success:&quot; or &quot;Error:&quot; so that the feedback is provided in the page’s name.</p>
<h3 id="live-alerts">Live alerts</h3>
<p>Live alerts are dynamically inserted into an existing page or view as an immediate response to a user’s action, such as checking a checkbox. They’re used where the change to the page’s content is not significant enough to constitute a change of context.</p>
<p>When implemented as a live alert, the alert container needs to be empty and present in the document object model (DOM) when the page or view is first loaded. The actual alert message is then dynamically inserted into the container following whatever user action triggers the alert.</p>
<p>To ensure that screen reader users are notified of a live alert, the alert container is marked up as a <a href="https://w3c.github.io/aria/#dfn-live-region">live region</a>. When content is dynamically inserted in a live region container, that content is automatically announced to the user by the screen reader.</p>
<p>Success and error summary alerts are not intended to be used as live alerts. Since they always follow form submission, which is a change of context, they are always static. However, if they are used as live alerts, they should be tested for accessibility. Also, as live alerts are already announced automatically to screen reader users, the alert should not receive focus.</p>
<h2 id="information">Information</h2>
<p>Use information alerts to inform users of important information or changes on a page only. They should be used sparingly.</p>
<ExampleContainer>
    <ExampleHeading>Information alert - Static</ExampleHeading>
    <Example  code={components__Alerts[0]} iframeProps={{
        id:"iframe_componentsAlerts0",
        className: "example__iframe",
        src:"/components/Alerts__example0.html",
        title:"Example title: Warning alert - Static",
        height: 228
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Information alert - Live</ExampleHeading>
    <Example  code={components__Alerts[1]} iframeProps={{
        id:"iframe_componentsAlerts1",
        className: "example__iframe",
        src:"/components/Alerts__example1.html",
        title:"Example title: Information alert - Live",
        height: 167
      }}></Example>
</ExampleContainer>

<h2 id="warning">Warning</h2>
<p>Use warning alerts to tell users something urgent. Only use this alert if the information will help users avoid a problem.</p>
<ExampleContainer>
    <ExampleHeading>Warning alert - Static</ExampleHeading>
    <Example  code={components__Alerts[2]} iframeProps={{
        id:"iframe_componentsAlerts2",
        className: "example__iframe",
        src:"/components/Alerts__example2.html",
        title:"Example title: Warning alert - Static",
        height: 196
      }}></Example>
</ExampleContainer>

<ExampleContainer>
    <ExampleHeading>Warning alert - Live</ExampleHeading>
    <Example  code={components__Alerts[3]} iframeProps={{
        id:"iframe_componentsAlerts3",
        className: "example__iframe",
        src:"/components/Alerts__example3.html",
        title:"Example title: Warning alert - Live",
        height: 167
      }}></Example>
</ExampleContainer>

<h2 id="success">Success</h2>
<p>Use success alerts to notify users that a form submission has completed successfully.</p>
<p>Success alerts are always static, as they are included as part of a new page or view, and remain unchanged until the user initiates a change of context.</p>
<p>To orient screen reader users and others to the alert, the Design System user must ensure that when the page or view first loads:</p>
<Ul bulleted>
<Li>focus is moved to the alert (the alert container is preset with <code>tabindex=”-1”</code> to make it programmatically focusable)</Li>
<Li>the document’s <code>title</code> starts with &quot;Success:&quot;.</Li>
</Ul>
<ExampleContainer>
    <ExampleHeading>Success alert</ExampleHeading>
    <Example  code={components__Alerts[4]} iframeProps={{
        id:"iframe_componentsAlerts4",
        className: "example__iframe",
        src:"/components/Alerts__example4.html",
        title:"Example: Alerts (static)",
        height: 198
      }}></Example>
</ExampleContainer>

<h2 id="error-summary">Error summary</h2>
<p>Use the error summary alert to inform users of every error they need to correct in a form before they can move on to the next step or complete their task.</p>
<p>Form errors must be presented using:</p>
<Ul bulleted>
<Li>the error summary alert</Li>
<Li>individual error messages next to each form field with an error.</Li>
</Ul>
<p>The error summary should be added at the top of the page above the form and link to each form field that has an error.</p>
<p>Error summary alerts are always static, as they are included as part of a new page or view, and remain unchanged until the user initiates a change of context.</p>
<p>To orient screen reader users and others to the alert, the Design System user must ensure that when the page or view first loads:</p>
<Ul bulleted>
<Li>focus is moved to the alert (the alert container is preset with <code>tabindex=”-1”</code> to make it programmatically focusable)</Li>
<Li>the document’s <code>title</code> starts with &quot;Error:&quot;.</Li>
</Ul>
<ExampleContainer>
    <ExampleHeading>Error summary alert</ExampleHeading>
    <Example  code={components__Alerts[5]} iframeProps={{
        id:"iframe_componentsAlerts5",
        className: "example__iframe",
        src:"/components/Alerts__example5.html",
        title:"Example title: Error summary alert",
        height: 234
      }}></Example>
</ExampleContainer>

<h2 id="error-messages">Error messages</h2>
<p>Specific error messages must be provided for specific error states. Style error messages as shown in the ‘Error messages’ sections of the guidance for the following form components:</p>
<Ul bulleted>
<Li><a href="https://design-system-alpha.digital.govt.nz/components/Input/">Text input</a></Li>
<Li><a href="https://design-system-alpha.digital.govt.nz/components/Radios/">Radio buttons</a></Li>
<Li><a href="https://design-system-alpha.digital.govt.nz/components/Date/">Date input</a></Li>
</Ul>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
<p>Guidance for the page alerts component derived from the <a href="https://designsystem.gov.au/components/main-nav/rationale/">Australian Government Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Alerts"}
      id={"Alerts"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
