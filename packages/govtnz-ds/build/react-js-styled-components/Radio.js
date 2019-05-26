import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin: 0;
  opacity: 0;
  :disabled {
    cursor: default;
  }
`;

const Radio = ({
  fakeFocus,
  gov1,
  hintId,
  name,
  disabled,
  readOnly,
  autoFocus,
  value,
  checked,
  onChange
}) => (
  <StyledInput
    fakeFocus={fakeFocus}
    aria-describedby={hintId}
    id={gov1}
    name={name}
    type="radio"
    disabled={disabled}
    readOnly={readOnly}
    autoFocus={autoFocus}
    value={value}
    checked={checked}
    onChange={onChange}
  />
);
Radio.props = [
  "fakeFocus",
  "gov1",
  "hintId",
  "name",
  "disabled",
  "readOnly",
  "autoFocus",
  "value",
  "checked",
  "onChange"
];
export default Radio;
