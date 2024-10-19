"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastViewport = exports.ToastTitle = exports.ToastProvider = exports.ToastDescription = exports.ToastClose = exports.ToastAction = exports.Toast = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactToast = require("@radix-ui/react-toast");
var _classVarianceAuthority = require("class-variance-authority");
var _lucideReact = require("lucide-react");
var _utils = require("../../utils/utils");
var _excluded = ["className"],
  _excluded2 = ["className", "variant"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var ToastProvider = exports.ToastProvider = _reactToast.Provider;
var ToastViewport = exports.ToastViewport = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(_reactToast.Viewport, _extends({
    ref: ref,
    className: (0, _utils.cn)('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className)
  }, props));
});
ToastViewport.displayName = _reactToast.Viewport.displayName;
var toastVariants = (0, _classVarianceAuthority.cva)('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
  variants: {
    variant: {
      "default": 'border bg-background text-foreground',
      success: 'border-green-500 bg-green-500 text-white',
      destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});
var Toast = exports.Toast = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
    variant = _ref2.variant,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement(_reactToast.Root, _extends({
    ref: ref,
    className: (0, _utils.cn)(toastVariants({
      variant: variant
    }), className)
  }, props));
});
Toast.displayName = _reactToast.Root.displayName;
var ToastAction = exports.ToastAction = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement(_reactToast.Action, _extends({
    ref: ref,
    className: (0, _utils.cn)('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', className)
  }, props));
});
ToastAction.displayName = _reactToast.Action.displayName;
var ToastClose = exports.ToastClose = /*#__PURE__*/(0, _react.forwardRef)(function (_ref4, ref) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement(_reactToast.Close, _extends({
    ref: ref,
    className: (0, _utils.cn)('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className),
    "toast-close": ""
  }, props), /*#__PURE__*/_react["default"].createElement(_lucideReact.X, {
    className: "h-4 w-4"
  }));
});
ToastClose.displayName = _reactToast.Close.displayName;
var ToastTitle = exports.ToastTitle = /*#__PURE__*/(0, _react.forwardRef)(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_react["default"].createElement(_reactToast.Title, _extends({
    ref: ref,
    className: (0, _utils.cn)('text-sm font-semibold', className)
  }, props));
});
ToastTitle.displayName = _reactToast.Title.displayName;
var ToastDescription = exports.ToastDescription = /*#__PURE__*/(0, _react.forwardRef)(function (_ref6, ref) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_react["default"].createElement(_reactToast.Description, _extends({
    ref: ref,
    className: (0, _utils.cn)('text-sm opacity-90', className)
  }, props));
});
ToastDescription.displayName = _reactToast.Description.displayName;