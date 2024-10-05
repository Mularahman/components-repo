"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _button = _interopRequireDefault(require("./components/button"));
require("components-repo/dist/tailwind.css");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Pastikan mengimpor CSS

var HomePage = function HomePage() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4"
  }, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    variant: "primary",
    onClick: function onClick() {
      return alert('Button clicked!');
    }
  }, "Primary Button"));
};
var _default = exports["default"] = HomePage;