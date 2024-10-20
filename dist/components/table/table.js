"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableRow = exports.TableHeader = exports.TableHead = exports.TableFooter = exports.TableCell = exports.TableCaption = exports.TableBody = exports.Table = void 0;
var _react = _interopRequireWildcard(require("react"));
var _utils = require("../../utils/utils");
var _excluded = ["className"],
  _excluded2 = ["className"],
  _excluded3 = ["className"],
  _excluded4 = ["className"],
  _excluded5 = ["className"],
  _excluded6 = ["className"],
  _excluded7 = ["className"],
  _excluded8 = ["className"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
var Table = exports.Table = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative w-full overflow-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", _extends({
    ref: ref,
    className: (0, _utils.cn)('w-full caption-bottom text-sm', className)
  }, props)));
});
Table.displayName = 'Table';
var TableHeader = exports.TableHeader = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var className = _ref2.className,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("thead", _extends({
    ref: ref,
    className: (0, _utils.cn)('[&_tr]:border-b', className)
  }, props));
});
TableHeader.displayName = 'TableHeader';
var TableBody = exports.TableBody = /*#__PURE__*/(0, _react.forwardRef)(function (_ref3, ref) {
  var className = _ref3.className,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement("tbody", _extends({
    ref: ref,
    className: (0, _utils.cn)('[&_tr:last-child]:border-0', className)
  }, props));
});
TableBody.displayName = 'TableBody';
var TableFooter = exports.TableFooter = /*#__PURE__*/(0, _react.forwardRef)(function (_ref4, ref) {
  var className = _ref4.className,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement("tfoot", _extends({
    ref: ref,
    className: (0, _utils.cn)('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)
  }, props));
});
TableFooter.displayName = 'TableFooter';
var TableRow = exports.TableRow = /*#__PURE__*/(0, _react.forwardRef)(function (_ref5, ref) {
  var className = _ref5.className,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_react["default"].createElement("tr", _extends({
    ref: ref,
    className: (0, _utils.cn)('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)
  }, props));
});
TableRow.displayName = 'TableRow';
var TableHead = exports.TableHead = /*#__PURE__*/(0, _react.forwardRef)(function (_ref6, ref) {
  var className = _ref6.className,
    props = _objectWithoutProperties(_ref6, _excluded6);
  return /*#__PURE__*/_react["default"].createElement("th", _extends({
    ref: ref,
    className: (0, _utils.cn)('h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0', className)
  }, props));
});
TableHead.displayName = 'TableHead';
var TableCell = exports.TableCell = /*#__PURE__*/(0, _react.forwardRef)(function (_ref7, ref) {
  var className = _ref7.className,
    props = _objectWithoutProperties(_ref7, _excluded7);
  return /*#__PURE__*/_react["default"].createElement("td", _extends({
    ref: ref,
    className: (0, _utils.cn)('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)
  }, props));
});
TableCell.displayName = 'TableCell';
var TableCaption = exports.TableCaption = /*#__PURE__*/(0, _react.forwardRef)(function (_ref8, ref) {
  var className = _ref8.className,
    props = _objectWithoutProperties(_ref8, _excluded8);
  return /*#__PURE__*/_react["default"].createElement("caption", _extends({
    ref: ref,
    className: (0, _utils.cn)('mt-4 text-sm text-muted-foreground', className)
  }, props));
});
TableCaption.displayName = 'TableCaption';