"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogTrigger = exports.DialogTitle = exports.DialogPortal = exports.DialogOverlay = exports.DialogHeader = exports.DialogFooter = exports.DialogDescription = exports.DialogContent = exports.DialogClose = exports.Dialog = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDialog = require("@radix-ui/react-dialog");
var _lucideReact = require("lucide-react");
require("../libs/tailwind.css");
var _utils = require("../utils/utils");
var _excluded = ["className"],
  _excluded2 = ["className", "children"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Dialog = exports.Dialog = _reactDialog.Root;
var DialogTrigger = exports.DialogTrigger = _reactDialog.Trigger;
var DialogPortal = exports.DialogPortal = _reactDialog.Portal;
var DialogClose = exports.DialogClose = _reactDialog.Close;
var DialogOverlay = exports.DialogOverlay = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_reactDialog.Overlay, _extends({
    ref: ref,
    className: (0, _utils.cn)('fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className)
  }, props));
});
DialogOverlay.displayName = _reactDialog.Overlay.displayName;
var DialogContent = exports.DialogContent = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
    children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(DialogPortal, null, /*#__PURE__*/_react["default"].createElement(DialogOverlay, null), /*#__PURE__*/_react["default"].createElement(_reactDialog.Content, _extends({
    ref: ref,
    className: (0, _utils.cn)('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg', className)
  }, props), children, /*#__PURE__*/_react["default"].createElement(_reactDialog.Close, {
    className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
  }, /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
    className: "h-4 w-4"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, "Close"))));
});
DialogContent.displayName = _reactDialog.Content.displayName;
var DialogHeader = exports.DialogHeader = function DialogHeader(_ref3) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _utils.cn)('flex flex-col space-y-1.5 text-center sm:text-left', className)
  }, props));
};
DialogHeader.displayName = 'DialogHeader';
var DialogFooter = exports.DialogFooter = function DialogFooter(_ref4) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: (0, _utils.cn)('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)
  }, props));
};
DialogFooter.displayName = 'DialogFooter';
var DialogTitle = exports.DialogTitle = /*#__PURE__*/(0, _react.forwardRef)(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_react["default"].createElement(_reactDialog.Title, _extends({
    ref: ref,
    className: (0, _utils.cn)('text-lg font-semibold leading-none tracking-tight', className)
  }, props));
});
DialogTitle.displayName = _reactDialog.Title.displayName;
var DialogDescription = exports.DialogDescription = /*#__PURE__*/(0, _react.forwardRef)(function (_ref6, ref) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_react["default"].createElement(_reactDialog.Description, _extends({
    ref: ref,
    className: (0, _utils.cn)('text-sm text-muted-foreground', className)
  }, props));
});
DialogDescription.displayName = _reactDialog.Description.displayName;