"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("../libs/tailwind.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className;
  var baseStyles = 'py-2 px-4 rounded focus:outline-none';
  var variantStyles = {
    "default": 'bg-gray-300 text-black hover:bg-gray-400',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    success: 'bg-green-500 text-white hover:bg-green-600',
    danger: 'bg-red-500 text-white hover:bg-red-600'
  };
  var combinedStyles = "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(className);
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: combinedStyles
  }, children);
};
var _default = exports["default"] = Button;