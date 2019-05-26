// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

// Developer note: these files are treated as templates and called from prebuild.js
// They shouldn't be imported and used directly.

import React from 'react';
import { Link } from 'gatsby';
import onChangeGenerator from '../../commons/onChangeGenerator';
import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';
import H2 from '@govtnz/ds/build/react-ts/H2.tsx';
import '@govtnz/ds/build/css/H2.css';
import FieldsetBlock from '@govtnz/ds/build/react-ts/FieldsetBlock.tsx';
import '@govtnz/ds/build/css/FieldsetBlock.css';
import H1 from '@govtnz/ds/build/react-ts/H1.tsx';
import '@govtnz/ds/build/css/H1.css';
import Radios from '@govtnz/ds/build/react-ts/Radios.tsx';
import '@govtnz/ds/build/css/Radios.css';
import RadioBlock from '@govtnz/ds/build/react-ts/RadioBlock.tsx';
import '@govtnz/ds/build/css/RadioBlock.css';
import FieldsetBlockWithError from '@govtnz/ds/build/react-ts/FieldsetBlockWithError.tsx';
import '@govtnz/ds/build/css/FieldsetBlockWithError.css';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '@govtnz/ds/build/css/Ul.css';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '@govtnz/ds/build/css/Li.css';
import RadioBlockWithHint from '@govtnz/ds/build/react-ts/RadioBlockWithHint.tsx';
import '@govtnz/ds/build/css/RadioBlockWithHint.css';
import FormDivider from '@govtnz/ds/build/react-ts/FormDivider.tsx';
import '@govtnz/ds/build/css/FormDivider.css';
import components__Radios from '../../commons/examples/components__Radios';
// Indirect relative import because this template is output to src/pages/components so it needs to step back to `commons`.
import ComponentPage from '../../commons/component-page';
import ComponentCode from '../../commons/component-code';
import Example from '../../commons/Example';
import ExampleContainer from '../../commons/ExampleContainer';
import ExampleHeading from '../../commons/ExampleHeading';
import ExampleSection from '../../commons/ExampleSection';

const PageContent = (props) => <React.Fragment><P styleSize="large">Radio buttons present users a choice of options from which they can select only one.</P>

<H2 {...onChangeGenerator(H2)} styleSize="large" id="examples">Examples</H2>
<p>Interact with each example to see how it works.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <Example {...onChangeGenerator(Example)} code={components__Radios[0]} >
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId1">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId1">
            <Radios {...onChangeGenerator(Radios)} inline>
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="Yes" radioId="anyRadioId" 
                value="true" name="nameChange1" labelId="labelId1" hintId="hintId1" />
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="No" radioId="anyRadioId255" value="false" name="nameChange1" labelId="labelId255" hintId="hintId1" />
            </Radios>
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Error</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Radios[1]} >
        <FieldsetBlockWithError {...onChangeGenerator(FieldsetBlockWithError)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId5">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId5" errorId="errorId5" error="Select 'yes' if you have changed your name.">
            <Radios {...onChangeGenerator(Radios)} inline>
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="Yes" radioId="anyRadioId9234" 
                value="true" name="nameChange5" labelId="labelId9" hintId="hintId5" />
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="No" radioId="anyRadioId10" value="false" name="nameChange5" hintId="hintId5" labelId="labelId10" />
            </Radios>
        </FieldsetBlockWithError>
    </Example>
</ExampleContainer>

<h2 id="when-to-use-it">When to use it</h2>
<p>Use the radio buttons component when users can only select one option from a list.</p>
<h2 id="when-not-to-use-it">When not to use it</h2>
<p>Do not use the radio buttons component if users might need to select more than one option. Use the checkboxes component instead.</p>
<h2 id="how-it-works">How it works</h2>
<p>Radio buttons are grouped together in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code> that describes them, as shown in the examples on this page. This is usually a question, like ‘Where do you live?’.</p>
<p>If you are asking just one question per page, you can set the contents of the <code>&lt;legend&gt;</code> as the page heading.</p>
<p>Always position radio buttons to the left of their labels. This makes them easier to find, especially for users of screen magnifiers.</p>
<p>Unlike with checkboxes, users can only select one option from a list of radio buttons. Do not assume that users will know how many options they can select based on the visual difference between radio buttons and checkboxes alone. If needed, add a hint explaining this, like ‘Select one option’.</p>
<p>Do not pre-select radio button options. Pre-selecting radio button options makes it more likely that users will:</p>
<Ul {...onChangeGenerator(Ul)} bulleted>
<Li {...onChangeGenerator(Li)}>not realise they’ve missed a question</Li>
<Li {...onChangeGenerator(Li)}>submit the wrong answer.</Li>
</Ul>
<p>Be aware that, once users have selected one option, they have to refresh their browser window to go back to having no option selected. To avoid this, include ‘None of the above’ or ‘I do not know’, if they are valid options.</p>
<p>Order radio button options alphabetically by default.</p>
<p>In some cases, it can be helpful to order them from most to least common. For example, you could order options for ‘Where do you live?’ based on population size.</p>
<p>Another example of pre-selected ordering is listing options chronologically. For example, you could order available appointment times in a day from earliest to latest.</p>
<p>However, using pre-selected ordering could reinforce bias in your service, so use it with caution. If in doubt, order alphabetically.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Stacked radio buttons</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Radios[2]} >
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="whereLiveTitle">Where do you live?</H1>}>
            <RadioBlock {...onChangeGenerator(RadioBlock)} label="North Island" radioId="anyRadioId3334" name="where" value="north" labelId="labelId3" />
            <RadioBlock {...onChangeGenerator(RadioBlock)} label="South Island" radioId="anyRadioId42344" name="where" value="south" labelId="labelId4" />
            <RadioBlock {...onChangeGenerator(RadioBlock)} label="Stewart Island" radioId="anyRadioId5234" name="where" value="stewart" labelId="labelId5" />
            <RadioBlock {...onChangeGenerator(RadioBlock)} label="Chatham Islands" radioId="anyRadioId6234" name="where" value="chatham" labelId="labelId6" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<p>When there are more than 2 options, radio buttons should be stacked.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Inline radio buttons</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Radios[3]} >
        <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId6">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId2221">
            <Radios {...onChangeGenerator(Radios)} inline>
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="Yes" radioId="anyRadioId55" 
                value="true" name="nameChange1" labelId="labelId1" hintId="hintId2221" />
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="No" radioId="anyRadioId2551" value="false" name="nameChange1" labelId="labelId2" hintId="hintId2221" />
            </Radios>
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<p>If there are only 2 options, you can either stack the radio buttons or display them inline.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Radio button items with hints</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Radios[4]} >
            <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="providerChoiceTitle1">Choose one provider</H1>} hint={<p>Select one provider.</p>} hintId="hintId">
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Aardvark services" hint="North Island only" hintId="someHintId7" radioId="anyRadioId7234" name="providerChoice3" value="provider1" labelId="labelId5" />
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Bumblebee services" hint="North and South Island" hintId="someHintId8" radioId="anyRadioId8234" name="providerChoice3" value="provider2" labelId="labelId8" />
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Caterpillar company" hint="All new Zealand territories" hintId="someHintId7234" radioId="anyRadioId9f" name="providerChoice3" value="provider3" labelId="labelId9" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<p>You can add hints to radio button items to provide more information about the options.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Radio button items with a text divider</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Radios[5]} >
            <FieldsetBlock {...onChangeGenerator(FieldsetBlock)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="providerChoiceTitle2">Choose one provider</H1>} hint={<p>Select one provider.</p>} hintId="hintId234">
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Aardvark Services" hint="North Island only" hintId="someHintId72344" radioId="anyRadioId7345" name="providerChoice3" value="provider1" labelId="labelId5" />
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Dandelion Services" hint="South and Stewart Islands only" hintId="someHintId8533" radioId="anyRadioId8345" name="providerChoice3" value="provider2" labelId="labelId8" />
                <FormDivider {...onChangeGenerator(FormDivider)}><p>-or-</p></FormDivider>
                <RadioBlockWithHint {...onChangeGenerator(RadioBlockWithHint)} label="Sign in with Eel Services" hint="Non-New Zealand residents only" hintId="someHintId7234444" radioId="anyRadioId3459" name="providerChoice3" value="provider3" labelId="labelId9" />
        </FieldsetBlock>
    </Example>
</ExampleContainer>

<p>If one or more of your radio button options is different from the others, it can help users if you separate them using a text divider. The text is usually the word ‘or’.</p>
<h2 id="error-messages">Error messages</h2>
<p>Make sure error messages follow the guidance below, and that you have specific error messages for specific error states.</p>
<ExampleContainer {...onChangeGenerator(ExampleContainer)}>
    <ExampleHeading {...onChangeGenerator(ExampleHeading)}>Error</ExampleHeading>
    <Example {...onChangeGenerator(Example)} code={components__Radios[6]} >
        <FieldsetBlockWithError {...onChangeGenerator(FieldsetBlockWithError)} legend={<H1 {...onChangeGenerator(H1)} styleSize="large" id="nameChangeId8">Have you changed your name?</H1>} hint={<p>This includes changing your last name or spelling your name differently.</p>} hintId="hintId5344" errorId="errorId525" error="Select 'yes' if you have changed your name.">
            <Radios {...onChangeGenerator(Radios)} inline>
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="Yes" radioId="anyRadioId9" 
                value="true" name="nameChange5" labelId="labelId9" />
                <RadioBlock {...onChangeGenerator(RadioBlock)} label="No" radioId="anyRadioId10234" value="false" name="nameChange5" labelId="labelId10" />
            </Radios>
        </FieldsetBlockWithError>
    </Example>
</ExampleContainer>

<h4 id="if-nothing-is-selected-and-the-options-are-yes-or-no">If nothing is selected and the options are ‘yes’ or ‘no’</h4>
<p>Say ‘Select ‘yes’ if [whatever it is] is true’. For example, ‘Select ‘yes’ if Sarah normally lives with you’.</p>
<h4 id="if-nothing-is-selected-and-the-question-includes-options">If nothing is selected and the question includes options</h4>
<p>Say ‘Select if [whatever it is]’. For example, ‘Select if you are employed or self-employed’.</p>
<h4 id="if-nothing-is-selected-and-the-question-does-not-include-options-h4">If nothing is selected and the question does not include options [H4]</h4>
<p>Say ‘Select [whatever it is]’. For example, ‘Select the day of the week you pay your rent’.</p>
<h2 id="credit">Credit</h2>
<p>Original HTML and CSS derived from <a href="https://github.com/alphagov/govuk-frontend">GOV.UK Design System</a>.</p>
</React.Fragment>

export default function Code(props) {
  return (
    <ComponentPage
      title={"Radios"}
      id={"Radios"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
}
