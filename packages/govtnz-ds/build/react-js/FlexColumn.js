"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var constants = {
  xs: {
    "1": "g-flex-col-xs-1",
    "2": "g-flex-col-xs-2",
    "3": "g-flex-col-xs-3",
    "4": "g-flex-col-xs-4",
    "5": "g-flex-col-xs-5",
    "6": "g-flex-col-xs-6",
    "7": "g-flex-col-xs-7",
    "8": "g-flex-col-xs-8",
    "9": "g-flex-col-xs-9",
    "10": "g-flex-col-xs-10",
    "11": "g-flex-col-xs-11",
    "12": "g-flex-col-xs-12",
    hidden: "g-flex-col-xs-hidden",
    auto: "g-flex-col-xs"
  },
  sm: {
    "1": "g-flex-col-sm-1",
    "2": "g-flex-col-sm-2",
    "3": "g-flex-col-sm-3",
    "4": "g-flex-col-sm-4",
    "5": "g-flex-col-sm-5",
    "6": "g-flex-col-sm-6",
    "7": "g-flex-col-sm-7",
    "8": "g-flex-col-sm-8",
    "9": "g-flex-col-sm-9",
    "10": "g-flex-col-sm-10",
    "11": "g-flex-col-sm-11",
    "12": "g-flex-col-sm-12",
    hidden: "g-flex-col-sm-hidden",
    auto: "g-flex-col-sm"
  },
  md: {
    "1": "g-flex-col-md-1",
    "2": "g-flex-col-md-2",
    "3": "g-flex-col-md-3",
    "4": "g-flex-col-md-4",
    "5": "g-flex-col-md-5",
    "6": "g-flex-col-md-6",
    "7": "g-flex-col-md-7",
    "8": "g-flex-col-md-8",
    "9": "g-flex-col-md-9",
    "10": "g-flex-col-md-10",
    "11": "g-flex-col-md-11",
    "12": "g-flex-col-md-12",
    hidden: "g-flex-col-md-hidden",
    auto: "g-flex-col-md"
  },
  lg: {
    "1": "g-flex-col-lg-1",
    "2": "g-flex-col-lg-2",
    "3": "g-flex-col-lg-3",
    "4": "g-flex-col-lg-4",
    "5": "g-flex-col-lg-5",
    "6": "g-flex-col-lg-6",
    "7": "g-flex-col-lg-7",
    "8": "g-flex-col-lg-8",
    "9": "g-flex-col-lg-9",
    "10": "g-flex-col-lg-10",
    "11": "g-flex-col-lg-11",
    "12": "g-flex-col-lg-12",
    hidden: "g-flex-col-lg-hidden",
    auto: "g-flex-col-md"
  },
  xsOffset: {
    "0": "g-flex-col-xs-offset-0",
    "1": "g-flex-col-xs-offset-1",
    "2": "g-flex-col-xs-offset-2",
    "3": "g-flex-col-xs-offset-3",
    "4": "g-flex-col-xs-offset-4",
    "5": "g-flex-col-xs-offset-5",
    "6": "g-flex-col-xs-offset-6",
    "7": "g-flex-col-xs-offset-7",
    "8": "g-flex-col-xs-offset-8",
    "9": "g-flex-col-xs-offset-9",
    "10": "g-flex-col-xs-offset-10",
    "11": "g-flex-col-xs-offset-11",
    "12": "g-flex-col-xs-offset-12"
  },
  smOffset: {
    "0": "g-flex-col-sm-offset-0",
    "1": "g-flex-col-sm-offset-1",
    "2": "g-flex-col-sm-offset-2",
    "3": "g-flex-col-sm-offset-3",
    "4": "g-flex-col-sm-offset-4",
    "5": "g-flex-col-sm-offset-5",
    "6": "g-flex-col-sm-offset-6",
    "7": "g-flex-col-sm-offset-7",
    "8": "g-flex-col-sm-offset-8",
    "9": "g-flex-col-sm-offset-9",
    "10": "g-flex-col-sm-offset-10",
    "11": "g-flex-col-sm-offset-11",
    "12": "g-flex-col-sm-offset-12"
  },
  mdOffset: {
    "0": "g-flex-col-md-offset-0",
    "1": "g-flex-col-md-offset-1",
    "2": "g-flex-col-md-offset-2",
    "3": "g-flex-col-md-offset-3",
    "4": "g-flex-col-md-offset-4",
    "5": "g-flex-col-md-offset-5",
    "6": "g-flex-col-md-offset-6",
    "7": "g-flex-col-md-offset-7",
    "8": "g-flex-col-md-offset-8",
    "9": "g-flex-col-md-offset-9",
    "10": "g-flex-col-md-offset-10",
    "11": "g-flex-col-md-offset-11",
    "12": "g-flex-col-md-offset-12"
  },
  lgOffset: {
    "0": "g-flex-col-lg-offset-0",
    "1": "g-flex-col-lg-offset-1",
    "2": "g-flex-col-lg-offset-2",
    "3": "g-flex-col-lg-offset-3",
    "4": "g-flex-col-lg-offset-4",
    "5": "g-flex-col-lg-offset-5",
    "6": "g-flex-col-lg-offset-6",
    "7": "g-flex-col-lg-offset-7",
    "8": "g-flex-col-lg-offset-8",
    "9": "g-flex-col-lg-offset-9",
    "10": "g-flex-col-lg-offset-10",
    "11": "g-flex-col-lg-offset-11",
    "12": "g-flex-col-lg-offset-12"
  },
  xsHorizontalAlign: {
    start: "g-flex-start-xs",
    center: "g-flex-center-xs",
    right: "g-flex-right-xs"
  },
  smHorizontalAlign: {
    start: "g-flex-start-sm",
    center: "g-flex-center-sm",
    end: "g-flex-end-sm"
  },
  mdHorizontalAlign: {
    start: "g-flex-start-md",
    center: "g-flex-center-md",
    end: "g-flex-end-md"
  },
  lgHorizontalAlign: {
    start: "g-flex-start-lg",
    center: "g-flex-center-lg",
    end: "g-flex-end-lg"
  }
};

var FlexColumn = function FlexColumn(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xsOffset = _ref.xsOffset,
      smOffset = _ref.smOffset,
      mdOffset = _ref.mdOffset,
      lgOffset = _ref.lgOffset,
      xsHorizontalAlign = _ref.xsHorizontalAlign,
      smHorizontalAlign = _ref.smHorizontalAlign,
      mdHorizontalAlign = _ref.mdHorizontalAlign,
      lgHorizontalAlign = _ref.lgHorizontalAlign,
      isReversed = _ref.isReversed,
      className = _ref.className,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "g-flex-col".concat(constants.xs[xs] !== undefined ? " " + constants.xs[xs] : "").concat(constants.sm[sm] !== undefined ? " " + constants.sm[sm] : "").concat(constants.md[md] !== undefined ? " " + constants.md[md] : "").concat(constants.lg[lg] !== undefined ? " " + constants.lg[lg] : "").concat(constants.xsOffset[xsOffset] !== undefined ? " " + constants.xsOffset[xsOffset] : "").concat(constants.smOffset[smOffset] !== undefined ? " " + constants.smOffset[smOffset] : "").concat(constants.mdOffset[mdOffset] !== undefined ? " " + constants.mdOffset[mdOffset] : "").concat(constants.lgOffset[lgOffset] !== undefined ? " " + constants.lgOffset[lgOffset] : "").concat(constants.xsHorizontalAlign[xsHorizontalAlign] !== undefined ? " " + constants.xsHorizontalAlign[xsHorizontalAlign] : "").concat(constants.smHorizontalAlign[smHorizontalAlign] !== undefined ? " " + constants.smHorizontalAlign[smHorizontalAlign] : "").concat(constants.mdHorizontalAlign[mdHorizontalAlign] !== undefined ? " " + constants.mdHorizontalAlign[mdHorizontalAlign] : "").concat(constants.lgHorizontalAlign[lgHorizontalAlign] !== undefined ? " " + constants.lgHorizontalAlign[lgHorizontalAlign] : "").concat(isReversed ? " g-flex-reverse" : "").concat(className ? " " + className : "")
  }, children !== undefined ? children : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null));
};

var _default = FlexColumn;
exports["default"] = _default;