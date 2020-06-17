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
import components__Header from '../../commons/examples/components__Header';
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

const PageContent = (props) => <React.Fragment><P styleSize="large">
    A header helps users to identify what site they are on and provides a quick, organised way to reach the main sections of a website. It includes horizontal navigation and branding to identify your site.
</P>

<H2 styleSize="large" id="example">Example</H2>
<p>Interact with the example to see how it works.</p>
<p>Note that the logo and <a href="https://design-system-alpha.digital.govt.nz/components/FlexGrid/">flexbox grid component</a>, are for example purposes only and are optional.</p>
<ExampleContainer>
    <Example  code={components__Header[0]} iframeProps={{
        id:"iframe_componentsHeader0",
        className: "example__iframe",
        src:"/components/Header__example0.html",
        title:"Example: Header containing a MainNav",
        height: 328
      }}></Example>
</ExampleContainer>

<p>This component is responsive. Click the ‘open in new window’ to see how it behaves.</p>
<p>Design System users should avoid wrapping main navigation links over two or more lines. Instead, try to present links in an unbroken horizontal list for screen widths above 768px. For screen widths of 768px or below, the mobile menu will be triggered by default.</p>
<h2 id="when-to-use-it">When to use it</h2>
<p>A header is required on all government websites. When this header component is used, it must include:</p>
<Ul bulleted>
<Li>your logo or site name</Li>
<Li>your site&#39;s primary navigation.</Li>
</Ul>
<h2 id="how-it-works">How it works</h2>
<p>Header is a container component. It contains your logo and your site&#39;s primary navigation. By default, it uses the New Zealand Government Design System (NZGDS) colour palette.</p>
<h3 id="logo">Logo</h3>
<p>Your logo helps users to quickly understand which site they are viewing. Clicking the logo should take users back to the homepage.</p>
<p>We recommend using a rectangular &#39;white on dark&#39; lockup of your logo. Logos that are long and thin or tall and wide should be avoided. Any text in the logo should be readable.</p>
<p>The logo should appear vertically centered in the header. As the header component has no strict padding or margin, it is up to Design System users to adjust spacing above and below the logo for ideal placement.</p>
<p>The NZGDS does not include a logo component. Including a logo is a decision for the Design System user.</p>
<h3 id="colour-scheme">Colour scheme</h3>
<p>The header component uses the dark grey colour palette of the Design System by default. You can implement your own visual identity guidelines, but you must make sure they meet requirements of the <a href="https://www.digital.govt.nz/standards-and-guidance/nz-government-web-standards/web-accessibility-standard-1-1/"> NZ Government Web Accessibility Standard</a>.</p>
<p>In particular, the text and UI elements within the component must meet Web Content Accessibility Guidelines (WCAG) success criteria:</p>
<Ul bulleted>
<Li><a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">1.4.3 Contrast (Minimum)</a></Li>
<Li><a href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">1.4.11 Non-text Contrast</a></Li>
</Ul>
<h3 id="main-navigation">Main navigation</h3>
<p>Your site&#39;s main navigation helps users to find the information they need. It typically includes the top level of the information architecture. It is intended as the primary way for users to navigate your site.</p>
<h4 id="highlight-the-current-section">Highlight the current section</h4>
<p>To show users where they are within your site, the link to the current page or section is automatically set with <code>aria-current=”page”</code>. This allows assistive technology like screen reader software to tell the user that it’s the link for the current page. It also causes a visual underline to be added to the link.</p>
<h4 id="avoid-using-hover-to-expand-drop-down-lists">Avoid using hover to expand drop-down lists</h4>
<p>Some users find it difficult to pause their cursor on an interactive element. Also, hover doesn’t work on touch screens.</p>
<h4 id="avoid-organisational-structure-navigation">Avoid organisational structure navigation</h4>
<p>You shouldn’t model your navigation on your organisation’s structure. Instead, structure it according to the tasks and information your users most frequently need to access.</p>
<h4 id="research-your-navigation">Research your navigation</h4>
<p>Conduct research with your users. Base decisions about your site’s menu labels and navigation structure on your findings. Continue researching to confirm that changes meet your users’ needs.</p>
<h4 id="for-large-websites-use-drop-down-menus-to-let-users-preview-lower-level-content">For large websites, use drop-down menus to let users preview lower-level content</h4>
<p>Drop-down menus help to preview lower-level content. They can save users time by letting them skip a level in the navigation.</p>
<p>Drop-down menus will be developed during the Design System’s beta phase.</p>
<h3 id="links">Links</h3>
<p>We recommend using a horizontal list of 2–9 links to key tasks and information on your site. This is one of the most visible and familiar ways of helping users to navigate a site.</p>
<h4 id="use-short-descriptive-and-recognisable-link-labels">Use short, descriptive, and recognisable link labels</h4>
<p>Link labels should clearly describe your content. They should be familiar and relevant to your users.</p>
<p>You shouldn’t label links with jargon or unfamiliar terms.</p>
<h4 id="left-justify-links">Left-justify links</h4>
<p>Left-justified link labels are easier to scan.</p>
<h4 id="front-load-key-terms">Front-load key terms</h4>
<p>Front-loading meaningful words at the beginning of labels reduces the amount of time users need to spend reading menus. For example, instead of ‘Our research’ use ‘Research’.</p>
<h4 id="use-sentence-case">Use sentence case</h4>
<p>Sentence case is easier to scan. Labels tied to a recognisable brand name are an exception.</p>
<h4 id="present-links-in-priority-order">Present links in priority order</h4>
<p>Higher-demand links should appear closer to the left, and lower-demand links should appear farther to the right.</p>
<h3 id="small-screen-devices">Small-screen devices</h3>
<p>The header component adapts the main navigation to small-screen devices. The breakpoint for displaying the mobile menu is 768px.</p>
<p>By default, the header component hides the main navigation and adds a button for users to open and close it.</p>
<p>The button has an <code>aria-expanded</code> attribute. The value (true or false) signals to screen reader users whether the main navigation is open or closed.</p>
<p>The button also includes a chevron icon. The chevron’s orientation helps to visually indicate the main navigation’s state. A downward-pointing chevron indicates that the main navigation is closed and an upward-pointing chevron indicates that it is open.</p>
<Ul bulleted>
<Li>choosing the right text for the button—using the word ‘Menu’ (or its equivalent in the page’s main language if that is not English) is strongly recommended</Li>
<Li>implementing the JavaScript to manage the main navigation’s open and closed states as triggered by the ‘Menu’ button.</Li>
</Ul>
<h4 id="3-bar-icon-the-hamburger">3 bar icon (the ‘hamburger’)</h4>
<p>Another common way to indicate the main navigation on small-screen devices is the 3 bar icon (often referred to as the ‘hamburger’). However, the 3 bar icon does not clearly indicate an opened or closed state and some users might not know what the icon means on its own. For these reasons, the Design System uses the chevron icon, alongside a clear text label.</p>
<h2 id="credit">Credit</h2>
<p>Guidance, original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
<p>Guidance for the main navigation component derived from the <a href="https://designsystem.gov.au/components/main-nav/rationale">Australian Government Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Header"}
      id={"Header"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
