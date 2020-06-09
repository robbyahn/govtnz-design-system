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
var StyledDiv = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg = styled_components_1.default.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv2 = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg2 = styled_components_1.default.svg(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv3 = styled_components_1.default.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg3 = styled_components_1.default.svg(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv4 = styled_components_1.default.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg4 = styled_components_1.default.svg(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv5 = styled_components_1.default.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg5 = styled_components_1.default.svg(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv6 = styled_components_1.default.div(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg6 = styled_components_1.default.svg(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv7 = styled_components_1.default.div(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg7 = styled_components_1.default.svg(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var StyledDiv8 = styled_components_1.default.div(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"], ["\n  position: relative;\n  background: #f4f4f4;\n  border: solid 1px var(--g-theme-alert-border, #d3d3d3);\n  margin-bottom: 1em;\n  padding: 24px 32px 24px 96px;\n  border-radius: 4px;\n  ::before {\n    content: \"\";\n    display: block;\n    width: 64px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    left: 0px;\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n  }\n  ::before {\n    background-color: var(--g-theme-info, #1f1bfb);\n  }\n  ::before {\n    background-color: var(--g-theme-warning, #d47500);\n  }\n  ::before {\n    background-color: var(--g-theme-success, #088a20);\n  }\n  ::before {\n    background-color: var(--g-theme-error, #b10e1e);\n  }\n"])));
var StyledSvg8 = styled_components_1.default.svg(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 24px;\n  fill: var(--g-theme-alert-icon, #ffffff);\n"])));
var Alert = function (_a) {
    var mode = _a.mode, level = _a.level, children = _a.children, headingId = _a.headingId;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "info" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(StyledDiv, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg, { "aria-hidden": "true", focusable: "false", height: "32", viewBox: "0 0 32 32", width: "32" },
                        react_1.default.createElement("path", { d: "M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z" }))))) : ("")))) : (""))) : (""),
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "warning" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(StyledDiv2, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg2, { "aria-hidden": "true", focusable: "false", height: "30", viewBox: "0 0 32 30", width: "32" },
                        react_1.default.createElement("path", { d: "M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z" }))))) : ("")))) : (""))) : (""),
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "success" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(StyledDiv3, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg3, { "aria-hidden": "true", focusable: "false", height: "32", viewBox: "0 0 32 32", width: "32" },
                        react_1.default.createElement("path", { d: "M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z" }))))) : ("")))) : (""))) : (""),
        mode === "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "error" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-atomic": "true", "aria-live": "polite", role: "note" }, children !== undefined ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(StyledDiv4, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg4, { "aria-hidden": "true", focusable: "false", height: "32", viewBox: "0 0 32 32", width: "32" },
                        react_1.default.createElement("path", { d: "M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z" }))))) : ("")))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "info" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note" },
                react_1.default.createElement(StyledDiv5, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg5, { "aria-hidden": "true", focusable: "false", height: "32", viewBox: "0 0 32 32", width: "32" },
                        react_1.default.createElement("path", { d: "M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zM16 14c-1.105 0-2 .895-2 2v8c0 1.105.895 2 2 2s2-.895 2-2v-8c0-1.105-.895-2-2-2zm-.003-8c-1.042.002-2 .727-1.997 2.015.002 1.265.962 1.987 2.003 1.985 1.042-.002 2-.727 1.997-1.992-.002-1.288-.962-2.01-2.003-2.008z" })))))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "warning" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note" },
                react_1.default.createElement(StyledDiv6, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg6, { "aria-hidden": "true", focusable: "false", height: "30", viewBox: "0 0 32 30", width: "32" },
                        react_1.default.createElement("path", { d: "M16.035 0c.746 0 1.424.387 1.778.995l13.95 26.233c.333.58.314 1.289-.05 1.851-.364.57-1.013.921-1.72.921H2.016c-.707 0-1.366-.349-1.73-.92-.362-.563-.383-1.273-.048-1.852L14.267.995C14.611.387 15.287 0 16.035 0zm-.006 22.938c-1.02 0-1.848.8-1.816 1.752 0 .92.86 1.691 1.847 1.691 1.019 0 1.847-.772 1.847-1.721-.031-.95-.86-1.722-1.878-1.722zm.477-14.015c-.892-.208-1.783.207-2.165.98-.127.266-.16.563-.128.8.063.86.095 1.722.159 2.583.096 1.366.159 2.701.255 4.037.03.415.03.831.063 1.247.033.742.606 1.276 1.37 1.276.732 0 1.337-.534 1.37-1.217.095-2.048.223-4.126.35-6.204l.096-1.662c.063-.86-.51-1.633-1.37-1.84z" })))))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "success" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note", tabIndex: -1 },
                react_1.default.createElement(StyledDiv7, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg7, { "aria-hidden": "true", focusable: "false", height: "32", viewBox: "0 0 32 32", width: "32" },
                        react_1.default.createElement("path", { d: "M4.686 4.686c6.248-6.248 16.38-6.248 22.628 0 6.248 6.248 6.248 16.38 0 22.628-6.248 6.248-16.38 6.248-22.628 0-6.248-6.248-6.248-16.38 0-22.628zm15.047 7.004c-.96.878-5.696 5.559-5.996 5.735-.78-.703-2.039-1.99-2.878-2.809-.84-.76-1.379-.117-2.398.936-1.14 1.112 0 1.697 1.619 3.277l2.938 2.867c1.08.936 1.979-.468 3.417-1.814l5.877-5.792c1.858-1.756 2.278-1.756.779-3.16-1.32-1.346-1.26-1.346-3.358.76z" })))))) : (""))) : (""),
        mode !== "live" ? (react_1.default.createElement(react_1.default.Fragment, null, level === "error" ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { "aria-labelledby": headingId, role: "note", tabIndex: -1 },
                react_1.default.createElement(StyledDiv8, { level: level },
                    children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example alert content ")),
                    react_1.default.createElement(StyledSvg8, { "aria-hidden": "true", focusable: "false", height: "32", viewBox: "0 0 32 32", width: "32" },
                        react_1.default.createElement("path", { d: "M27.314 27.314c6.248-6.248 6.248-16.38 0-22.628-6.248-6.248-16.38-6.248-22.628 0-6.248 6.248-6.248 16.38 0 22.628 6.248 6.248 16.38 6.248 22.628 0zM14.21 7.175c.405-.878 1.35-1.35 2.297-1.114.911.236 1.52 1.114 1.452 2.093l-.102 1.892c-.134 2.364-.27 4.728-.372 7.058-.034.777-.675 1.385-1.452 1.385-.81 0-1.418-.608-1.453-1.452-.034-.473-.034-.946-.067-1.419-.101-1.52-.169-3.04-.27-4.593-.068-.98-.102-1.96-.17-2.938-.032-.27.002-.609.137-.912zM16 21.873c1.08 0 1.959.879 1.992 1.96 0 1.08-.879 1.959-1.96 1.959-1.047 0-1.958-.88-1.958-1.925-.033-1.082.845-1.994 1.926-1.994z" })))))) : (""))) : ("")));
};
exports.default = Alert;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16;
//# sourceMappingURL=Alert.js.map