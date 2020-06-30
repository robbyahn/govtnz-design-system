// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React from 'react';

import H1 from '@govtnz/ds/build/react-ts/H1';
import '../../commons/styles/ds/themed-H1.scss';
import P from '@govtnz/ds/build/react-ts/P';
import '../../commons/styles/ds/themed-P.scss';
import Ul from '@govtnz/ds/build/react-ts/Ul';
import '../../commons/styles/ds/themed-Ul.scss';
import Li from '@govtnz/ds/build/react-ts/Li';
import '../../commons/styles/ds/themed-Li.scss';
import A from '@govtnz/ds/build/react-ts/A';
import '../../commons/styles/ds/themed-A.scss';

import AboutPage from '../../components/AboutPage';
import onChangeGenerator from '../../commons/onChangeGenerator';

const PageContent = (props) => <React.Fragment><H1 styleSize="xlarge" id="main-heading">About the Design System alpha website</H1>
<P styleSize="large">
    The New Zealand Government Design System (NZGDS) alpha website provides
    a catalogue of reusable basic elements, single components, and patterns of
    components for building websites and applications, along with guidance on
    how and when to use them. 
</P>

<P>All of Government Services Delivery is creating the NZGDS now. Our overall aim is to improve digital
service delivery across the New Zealand public service.</P>
<P><A className="g-link"  href="https://design-system-alpha.digital.govt.nz/">Read about the benefits of using our Design System, and how we are building it, on the homepage</A>.</P>
<P>This alpha website shows you what we have built so far, what we&#39;re working on,
and how you can get involved.</P>
<h2 id="get-involved">Get involved</h2>
<P>Since the Design System will be available for everyone in central and local
government (and beyond) to use, we want a strong cross-government community
backing it. You can contribute by:</P>
<Ul>
<Li>testing our components and patterns</Li>
<Li>helping to develop new components and patterns</Li>
<Li>commenting on our guidance.</Li>
</Ul>
</React.Fragment>

const template = (props) => {
    return (
        <AboutPage
            title="About"
            pageProps={props}
            PageContent={PageContent}
        />
    );
};

export default template;
