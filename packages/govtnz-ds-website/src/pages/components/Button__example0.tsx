// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import Button from '@govtnz/ds/build/react-ts/Button.tsx';
import '@govtnz/ds/build/css/Button.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}>
        <Button {...onChangeGenerator(Button)} type="Button">Save and continue</Button>
    </Example>);

const template = props => {
  return (
    <IframePage
      title={"Primary buttons (Button example)"}
      id={"iframe_componentsButton0"}
      parentUrl={"../Button"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
