"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbSeparator = exports.BreadcrumbPage = exports.BreadcrumbList = exports.BreadcrumbLink = exports.BreadcrumbItem = exports.BreadcrumbEllipsis = exports.Breadcrumb = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactSlot = require("@radix-ui/react-slot");
var _lucideReact = require("lucide-react");
var _utils = require("../../utils/utils");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["asChild", "className"],
  _excluded4 = ["className"],
  _excluded5 = ["children", "className"],
  _excluded6 = ["className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
function _objectDestructuringEmpty(t) { if (null == t) throw new TypeError("Cannot destructure " + t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Breadcrumb = exports.Breadcrumb = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var props = _extends({}, (_objectDestructuringEmpty(_ref), _ref));
  return /*#__PURE__*/_react["default"].createElement("nav", _extends({
    ref: ref,
    "aria-label": "breadcrumb"
  }, props));
});
Breadcrumb.displayName = 'Breadcrumb';
var BreadcrumbList = exports.BreadcrumbList = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded);
  return /*#__PURE__*/_react["default"].createElement("ol", _extends({
    ref: ref,
    className: (0, _utils.cn)('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', className)
  }, props));
});
BreadcrumbList.displayName = 'BreadcrumbList';
var BreadcrumbItem = exports.BreadcrumbItem = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("li", _extends({
    ref: ref,
    className: (0, _utils.cn)('inline-flex items-center gap-1.5', className)
  }, props));
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
var BreadcrumbLink = exports.BreadcrumbLink = /*#__PURE__*/(0, _react.forwardRef)(function (_ref4, ref) {
  var asChild = _ref4.asChild,
    className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded3);
  var Comp = asChild ? _reactSlot.Slot : 'a';
  return /*#__PURE__*/_react["default"].createElement(Comp, _extends({
    ref: ref,
    className: (0, _utils.cn)('transition-colors hover:text-foreground', className)
  }, props));
});
BreadcrumbLink.displayName = 'BreadcrumbLink';
var BreadcrumbPage = exports.BreadcrumbPage = /*#__PURE__*/(0, _react.forwardRef)(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded4);
  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    ref: ref,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: (0, _utils.cn)('font-normal text-foreground', className)
  }, props));
});
BreadcrumbPage.displayName = 'BreadcrumbPage';
var BreadcrumbSeparator = exports.BreadcrumbSeparator = function BreadcrumbSeparator(_ref6) {
  var children = _ref6.children,
    className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded5);
  return /*#__PURE__*/_react["default"].createElement("li", _extends({
    role: "presentation",
    "aria-hidden": "true",
    className: (0, _utils.cn)('[&>svg]:size-3.5', className)
  }, props), children !== null && children !== void 0 ? children : /*#__PURE__*/_react["default"].createElement(_lucideReact.ChevronRight, null));
};
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
var BreadcrumbEllipsis = exports.BreadcrumbEllipsis = function BreadcrumbEllipsis(_ref7) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded6);
  return /*#__PURE__*/_react["default"].createElement("span", _extends({
    role: "presentation",
    "aria-hidden": "true",
    className: (0, _utils.cn)('flex h-9 w-9 items-center justify-center', className)
  }, props), /*#__PURE__*/_react["default"].createElement(_lucideReact.MoreHorizontal, {
    className: "h-4 w-4"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "More"));
};
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis';