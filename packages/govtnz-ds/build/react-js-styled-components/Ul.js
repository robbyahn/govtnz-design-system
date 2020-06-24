"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: g-theme-font-family;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 400;\n  font-size: 1.25rem;\n  line-height: 1.625;\n  color: g-theme-color;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  padding-left: 20px;\n  list-style-type: disc;\n  @media print {\n    font-family: sans-serif;\n  }\n  @media (min-width: 40.0625em) {\n    font-size: 1.1875rem;\n    line-height: 1.31579;\n    margin-bottom: 1rem;\n  }\n  @media print {\n    font-size: 14pt;\n    line-height: 1.15;\n    color: g-theme-print-color;\n  }\n  margin-top: 10px;\n  margin-top: 0px;\n  margin-top: 0.5rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledUl = _styledComponents["default"].ul(_templateObject());

var Ul = function Ul(_ref) {
  var spacing = _ref.spacing,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledUl, {
    spacing: spacing
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Example text"));
};

var _default = Ul;
exports["default"] = _default;