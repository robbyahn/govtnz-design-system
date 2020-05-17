// @autogenerated

// WARNING THIS FILE IS AUTOGENERATED! DO NOT EDIT!

import React, { Fragment, useState, Component } from 'react';
import ReactDOM from 'react-dom';

// export const useMobileMenuContext = (): MobileMenuContextValue => {
//   const value = React.useContext(MobileMenuContext);
//   if (!value) throw Error(`Mobile menu used outside context`);
//   return value;
// };

import FlexContainer from '@govtnz/ds/build/react-ts/FlexContainer';import FlexRow from '@govtnz/ds/build/react-ts/FlexRow';import FlexColumn from '@govtnz/ds/build/react-ts/FlexColumn';
const ExampleContainer = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleHeading = ({ children }) => <Fragment>{children}</Fragment>;
const ExampleSection = ({ children }) => (
  <div className="example__section">{children}</div>
);
const Example = ({ children }) => <Fragment>{children}</Fragment>;

var PageContent = (props) => (<Example title="Example: 3-column Flexbox grid" {...onChangeGenerator({})}>
        <FlexContainer width="fixed" {...onChangeGenerator({})}>
            <FlexRow {...onChangeGenerator({})}>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-4 </FlexColumn>
                <FlexColumn xs="4" sm="4" md="4" lg="4" {...onChangeGenerator({})}> .g-flex-col .g-flex-col-md-4 </FlexColumn>
            </FlexRow>
        </FlexContainer>
    </Example>);

type MainNavMobileMenuContextProps = {
  children: React.ReactNode;
};

type MainNavMobileMenuContextState = {
  isOpen: boolean;
};

type MobileMenuContextValue = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenuContext = React.createContext<
  MobileMenuContextValue | undefined
>(undefined);

class MainNavMobileMenuContext extends Component<
  MainNavMobileMenuContextProps,
  MainNavMobileMenuContextState
> {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.setIsOpen = this.setIsOpen.bind(this);
  }

  setIsOpen(isOpen: boolean) {
    console.log('setting context provider value to ', isOpen);
    this.setState({
      isOpen,
    });
  }

  render() {
    const { children } = this.props;
    const { isOpen } = this.state;

    const value = { isOpen, setIsOpen: this.setIsOpen };

    return (
      <MobileMenuContext.Provider value={value}>
        {children}
      </MobileMenuContext.Provider>
    );
  }
}

function WrappedMainNav(props) {
  return (
    <MobileMenuContext.Consumer>
      {value => {
        const Component = props.Component;
        const newProps = {
          ...props,
          isOpen: value.isOpen.toString(),
          onClick: () => {
            console.log('click handler!');
            value.setIsOpen(!value.isOpen);
          },
        };
        console.log('Wrapped mainnav component being given', newProps);
        return <Component {...newProps} />;
      }}
    </MobileMenuContext.Consumer>
  );
}

      const onChangeGenerator = (props) => {
        // See onChangeGenerator insertion docs.
        // We can't know if a component takes props
        // of 'value' and 'onChange' so we insert some
        // and if they're not used that's ok.
        // The reason why we have 3 is because that's the
        // most number of inputs in a DS components, and it's 
        // simpler to just make 3.
  
        const [value, setValue] = useState(props && props.value);
        const [value2, setValue2] = useState(props && props.value2);
        const [value3, setValue3] = useState(props && props.value3);
      
        return {
          value,
          value2,
          value3,
          onChange: e => setValue(e.target.value),
          onChange2: e => setValue2(e.target.value),
          onChange3: e => setValue3(e.target.value),
        };
      };
    
      document.addEventListener('DOMContentLoaded', () => {
        const selector = '#root';
        const root = document.querySelector(selector);
        if (!root) {
          console.error("Couldn't find app mount point ", selector);
          return;
        }
        ReactDOM.hydrate(<PageContent />, root, window.afterRender);
      });
      