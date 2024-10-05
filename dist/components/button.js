"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Button = function Button(_ref) {
  var _ref$variant = _ref.variant,
    variant = _ref$variant === void 0 ? 'default' : _ref$variant,
    children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className;
  var baseStyles = 'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  var variantStyles = {
    "default": "bg-primary text-primary-foreground hover:opacity-90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-white hover:opacity-90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline"
  };
  var combinedStyles = "".concat(baseStyles, " ").concat(variantStyles[variant], " ").concat(className);
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: combinedStyles
  }, children);
};
var _default = exports["default"] = Button;