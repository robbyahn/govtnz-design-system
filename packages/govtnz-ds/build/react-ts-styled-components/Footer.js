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
var StyledFooter = styled_components_1.default.footer(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background-color: g-theme-inverted-background-color;\n  color: g-theme-inverted-color;\n  fill: g-theme-inverted-color;\n"], ["\n  background-color: g-theme-inverted-background-color;\n  color: g-theme-inverted-color;\n  fill: g-theme-inverted-color;\n"])));
var Footer = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(StyledFooter, { role: "contentinfo" }, children !== undefined ? (children) : (react_1.default.createElement(react_1.default.Fragment, null, " Example footer content "))));
};
exports.default = Footer;
var templateObject_1;
//# sourceMappingURL=Footer.js.map