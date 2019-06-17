// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment } from 'react';

import P from '@govtnz/ds/build/react-ts/P.tsx';
import '@govtnz/ds/build/css/P.css';
import Ul from '@govtnz/ds/build/react-ts/Ul.tsx';
import '@govtnz/ds/build/css/Ul.css';
import Li from '@govtnz/ds/build/react-ts/Li.tsx';
import '@govtnz/ds/build/css/Li.css';

import IframePage from '../../components/IframePage';
import onChangeGenerator from '../../commons/onChangeGenerator';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => <Fragment>{children}</Fragment>;
const Example = ({ children }) => <Fragment>{children}</Fragment>;

const PageContent = (props) => (<Example {...onChangeGenerator(Example)}><P styleSize="medium">To help keep the kitchen clean, please:</P>

<Ul {...onChangeGenerator(Ul)} bulleted>
    <Li {...onChangeGenerator(Li)}>replace tea and coffee jars on shelf</Li>
    <Li {...onChangeGenerator(Li)}>wipe down bench</Li>
    <Li {...onChangeGenerator(Li)}>wash dishes by: <Ul {...onChangeGenerator(Ul)} bulleted>
            <Li {...onChangeGenerator(Li)}>loading the dishwasher, if it's empty</Li>
            <Li {...onChangeGenerator(Li)}>rinsing and stacking, if dishwasher is going</Li>
        </Ul>
    </Li>
    <Li {...onChangeGenerator(Li)}>put recycling in labelled bins</Li>
</Ul>
</Example>);

const template = props => {
  return (
    <IframePage
      title={"Bulleted lists (typography example)"}
      id={"iframe_basicstypography8"}
      parentUrl={"../typography"}
      pageProps={props}
      PageContent={PageContent}
    />
  );
};

export default template;
