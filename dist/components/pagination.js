"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationPrevious = exports.PaginationNext = exports.PaginationLink = exports.PaginationItem = exports.PaginationEllipsis = exports.PaginationContent = exports.Pagination = void 0;
var _react = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _lucideReact = require("lucide-react");
var _utils = require("../utils/utils");
var _button = require("../components/button");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className", "isActive", "size", "href"],
  _excluded5 = ["className"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
// import "../libs/tailwind.css"

var Pagination = exports.Pagination = function Pagination(_ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("nav", _extends({
    role: "navigation",
    "aria-label": "pagination",
    className: (0, _utils.cn)('mx-auto flex w-full justify-center', className)
  }, props));
};
Pagination.displayName = 'Pagination';
var PaginationContent = exports.PaginationContent = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("ul", _extends({
    ref: ref,
    className: (0, _utils.cn)('flex flex-row items-center gap-1', className)
  }, props));
});
PaginationContent.displayName = 'PaginationContent';
var PaginationItem = exports.PaginationItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement("li", _extends({
    ref: ref,
    className: (0, _utils.cn)('', className)
  }, props));
});
PaginationItem.displayName = 'PaginationItem';
var PaginationLink = exports.PaginationLink = function PaginationLink(_ref4) {
  var className = _ref4.className,
    isActive = _ref4.isActive,
    _ref4$size = _ref4.size,
    size = _ref4$size === void 0 ? 'icon' : _ref4$size,
    href = _ref4.href,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement(_link["default"], _extends({
    href: href,
    "aria-current": isActive ? 'page' : undefined,
    className: (0, _utils.cn)((0, _button.buttonVariants)({
      variant: isActive ? 'outline' : 'ghost',
      size: size
    }), className)
  }, props));
};
PaginationLink.displayName = 'PaginationLink';
var PaginationPrevious = exports.PaginationPrevious = function PaginationPrevious(_ref5) {
  var className = _ref5.className,
    onClick = _ref5.onClick,
    disabled = _ref5.disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Go to previous page",
    className: (0, _utils.cn)((0, _button.buttonVariants)({
      variant: 'ghost',
      size: 'default'
    }), 'gap-1 pl-2.5', className),
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronLeft, {
    className: "h-4 w-4"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Previous"));
};
PaginationPrevious.displayName = 'PaginationPrevious';
var PaginationNext = exports.PaginationNext = function PaginationNext(_ref6) {
  var className = _ref6.className,
    onClick = _ref6.onClick,
    disabled = _ref6.disabled;
  return /*#__PURE__*/_react["default"].createElement("button", {
    "aria-label": "Go to next page",
    className: (0, _utils.cn)((0, _button.buttonVariants)({
      variant: 'ghost',
      size: 'default'
    }), 'gap-1 pr-2.5', className),
    onClick: disabled ? undefined : onClick,
    disabled: disabled
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Next"), /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronRight, {
    className: "h-4 w-4"
  }));
};
PaginationNext.displayName = 'PaginationNext';
var PaginationEllipsis = exports.PaginationEllipsis = function PaginationEllipsis(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded5);
  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    "aria-hidden": true,
    className: (0, _utils.cn)('flex h-9 w-9 items-center justify-center', className)
  }, props), /*#__PURE__*/_react["default"].createElement(_lucideReact.MoreHorizontal, {
    className: "h-4 w-4"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "More pages"));
};
PaginationEllipsis.displayName = 'PaginationEllipsis';