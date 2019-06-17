// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import InputBlock from '@govtnz/ds/build/react-ts/InputBlock.tsx';
import '@govtnz/ds/build/css/InputBlock.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="30" label="30 character width" hint="Fits a short sentence answer or a long address line." name="anyNameWidth30" inputId="anyId3" hintId="anyHintId3" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} type="Email" width="20" label="20 character width" hint="Fits an email address." name="anyNameWidth20" inputId="anyId4" hintId="anyHintId4" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="10" label="10 character width" hint="Fits a name." name="anyNameWidth10" inputId="anyId5" hintId="anyHintId5" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="5" label="5 character width" hint="Fits a post code." name="anyNameWidth5" inputId="anyId6" hintId="anyHintId6" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="4" label="4 character width" hint="Fits a 4-digit group of a credit card number." name="anyNameWidth4" inputId="anyId7" hintId="anyHintId7"  />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="3" label="3 character width" hint="Fits a prefix for a mobile number." name="anyNameWidth3" inputId="anyId8" hintId="anyHintId8" />
        </ExampleSection>
        <ExampleSection {...onChangeGenerator(ExampleSection)}>
            <InputBlock {...onChangeGenerator(InputBlock)} width="2" label="2 character width" hint="Fits the 2-digit part of a bank account number." name="anyNameWidth2" inputId="anyId9" hintId="anyHintId9" />
        </ExampleSection>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Fixed-width text input (Input example)"}
      id={"iframe_componentsInput2"}
      parentUrl={"../Input"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
