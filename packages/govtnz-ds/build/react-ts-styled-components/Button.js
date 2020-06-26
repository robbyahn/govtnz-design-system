"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var StyledButton = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 22px;\n  padding: 16px;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: g-theme-button-color;\n  background-color: g-theme-button-background-color;\n  box-shadow: 0 2px 0 0 g-theme-button-box-shadow-color;\n  text-align: center;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 19px;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 32px;\n  }\n  @media (min-width: 40.0625em) {\n    width: auto;\n  }\n  :link,\n  :visited,\n  :active,\n  :hover {\n    color: g-theme-button-color;\n    text-decoration: none;\n  }\n  ::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  :hover,\n  :focus {\n    background-color: g-theme-button-hover-background-color;\n  }\n  :active {\n    top: 2px;\n    box-shadow: none;\n  }\n  ::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -4px;\n    left: -2px;\n    background: transparent;\n  }\n  :active::before {\n    top: -4px;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  padding-top: 16px;\n  padding-bottom: 16px;\n  margin-top: 0px;\n  background: g-theme-button-disabled-background-color;\n  :hover,\n  :hover {\n    cursor: default;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  :active,\n  :active {\n    top: 0;\n    box-shadow: 0 2px 0 g-theme-button-active-box-shadow;\n  }\n  ", "\n  :link,:visited,:active,:hover {\n    ", "\n  }\n  :hover,\n  :focus {\n    background-color: g-theme-button-secondary-hover-background-color;\n  }\n  ", "\n  :link,:visited,:active,:hover {\n    ", "\n  }\n  :hover,\n  :focus {\n    background-color: g-theme-button-warning-background-color;\n  }\n"], ["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  box-sizing: border-box;\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 22px;\n  padding: 16px;\n  border: 2px solid transparent;\n  border-radius: 4px;\n  color: g-theme-button-color;\n  background-color: g-theme-button-background-color;\n  box-shadow: 0 2px 0 0 g-theme-button-box-shadow-color;\n  text-align: center;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-appearance: none;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 19px;\n  }\n  :focus {\n    outline: 3px solid g-theme-focus-ring-color;\n    outline-offset: 0;\n  }\n  @media (min-width: 40.0625em) {\n    margin-bottom: 32px;\n  }\n  @media (min-width: 40.0625em) {\n    width: auto;\n  }\n  :link,\n  :visited,\n  :active,\n  :hover {\n    color: g-theme-button-color;\n    text-decoration: none;\n  }\n  ::-moz-focus-inner {\n    padding: 0;\n    border: 0;\n  }\n  :hover,\n  :focus {\n    background-color: g-theme-button-hover-background-color;\n  }\n  :active {\n    top: 2px;\n    box-shadow: none;\n  }\n  ::before {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: -2px;\n    right: -2px;\n    bottom: -4px;\n    left: -2px;\n    background: transparent;\n  }\n  :active::before {\n    top: -4px;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  padding-top: 16px;\n  padding-bottom: 16px;\n  margin-top: 0px;\n  background: g-theme-button-disabled-background-color;\n  :hover,\n  :hover {\n    cursor: default;\n  }\n  :focus,\n  :focus {\n    outline: none;\n  }\n  :active,\n  :active {\n    top: 0;\n    box-shadow: 0 2px 0 g-theme-button-active-box-shadow;\n  }\n  ",
    "\n  :link,:visited,:active,:hover {\n    ",
    "\n  }\n  :hover,\n  :focus {\n    background-color: g-theme-button-secondary-hover-background-color;\n  }\n  ",
    "\n  :link,:visited,:active,:hover {\n    ",
    "\n  }\n  :hover,\n  :focus {\n    background-color: g-theme-button-warning-background-color;\n  }\n"])), function (props) {
    return props.level === "secondary" && styled_components_1.default.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background-color: g-theme-button-secondary-background-color;\n      box-shadow: 0 2px 0 g-theme-button-box-shadow-color;\n    "], ["\n      background-color: g-theme-button-secondary-background-color;\n      box-shadow: 0 2px 0 g-theme-button-box-shadow-color;\n    "])));
}, function (props) {
    return props.level === "secondary" && styled_components_1.default.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        color: g-theme-button-secondary-color;\n      "], ["\n        color: g-theme-button-secondary-color;\n      "])));
}, function (props) {
    return props.level === "warning" && styled_components_1.default.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: g-theme-error-background-color;\n      box-shadow: 0 2px 0 g-theme-button-box-shadow-color;\n    "], ["\n      background-color: g-theme-error-background-color;\n      box-shadow: 0 2px 0 g-theme-button-box-shadow-color;\n    "])));
}, function (props) {
    return props.level === "warning" && styled_components_1.default.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        color: g-theme-button-color;\n      "], ["\n        color: g-theme-button-color;\n      "])));
});
var Button = function (_a) {
    var disabled = _a.disabled, level = _a.level, name = _a.name, type = _a.type, onClick = _a.onClick, children = _a.children;
    return (react_1.default.createElement(StyledButton, { disabled: disabled, level: level, type: type, name: name, onClick: onClick }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example text "))));
};
exports.default = Button;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Button.js.map