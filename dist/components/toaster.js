"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toaster = void 0;
var _toast = require("../components/toast");
var _useToast2 = require("./use-toast");
var _react = _interopRequireDefault(require("react"));
require("../libs/tailwind.css");
var _excluded = ["id", "title", "description", "action"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Toaster = exports.Toaster = function Toaster() {
  var _useToast = (0, _useToast2.useToast)(),
    toasts = _useToast.toasts;
  return /*#__PURE__*/_react["default"].createElement(_toast.ToastProvider, null, toasts.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      description = _ref.description,
      action = _ref.action,
      props = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/_react["default"].createElement(_toast.Toast, _extends({
      key: id
    }, props), /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid gap-1"
    }, title && /*#__PURE__*/_react["default"].createElement(_toast.ToastTitle, null, title), description && /*#__PURE__*/_react["default"].createElement(_toast.ToastDescription, null, description)), action, /*#__PURE__*/_react["default"].createElement(_toast.ToastClose, null));
  }), /*#__PURE__*/_react["default"].createElement(_toast.ToastViewport, null));
};