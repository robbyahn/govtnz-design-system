import * as React from "react";
import * as styled from "styled-components";

type Props = {
  children?: React.ReactNode;
};

const StyledSpan = styled.span`
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25;
  display: block;
  color: #6f777b;
  @media print {
    font-family: sans-serif;
  }
  @media (min-width: 40.0625em) {
    font-size: 1.1875rem;
    line-height: 1.31579;
  }
  @media print {
    font-size: 14pt;
    line-height: 1.15;
  }
`;

const CaptionM = ({ children }: Props) => (
  <StyledSpan>
    {children !== undefined ? (
      children
    ) : (
      <React.Fragment>Example text</React.Fragment>
    )}
  </StyledSpan>
);
CaptionM.props = ["children"];
export default CaptionM;
