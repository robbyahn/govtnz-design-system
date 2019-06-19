// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import DateInput from '@govtnz/ds/build/react-ts/DateInput.tsx';
import '@govtnz/ds/build/css/DateInput.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)} codeOnly>
        <DateInput
 {...onChangeGenerator(DateInput
)}            id="bday"
            hintId="bday-hint"
            dayId="bday-day"
            monthId="bday-month"
            yearId="bday-year"
            label="What is your date of birth?"
            hint="For example, 31 3 1980"
            autoComplete="Birthday: Day"
            autoComplete2="Birthday: Month"
            autoComplete3="Birthday: Year"
        />
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Example 2"}
      id={"iframe_componentsDate2"}
      parentUrl={"../Date"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
