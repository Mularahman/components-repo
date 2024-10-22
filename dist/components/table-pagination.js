"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _pagination = require("./pagination");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var ItemLink = function ItemLink(_ref) {
  var current = _ref.current,
    page = _ref.page,
    onChange = _ref.onChange;
  var handleChange = (0, _react.useCallback)(function () {
    onChange(page);
  }, [page, onChange]);
  return /*#__PURE__*/_react["default"].createElement(_pagination.PaginationItem, {
    key: "#{page}"
  }, /*#__PURE__*/_react["default"].createElement(_pagination.PaginationLink, {
    href: "#",
    onClick: handleChange,
    isActive: current === page,
    size: undefined
  }, page));
};
var ItemLinks = function ItemLinks(_ref2) {
  var current = _ref2.current,
    total = _ref2.total,
    onChange = _ref2.onChange;
  var itemLinks = [];
  if (total <= 7) {
    for (var page = 1; page <= total; page++) {
      itemLinks.push(/*#__PURE__*/_react["default"].createElement(ItemLink, {
        key: page,
        current: current,
        page: page,
        onChange: onChange
      }));
    }
    return itemLinks;
  }
  var startPage = Math.max(1, current - 2);
  var endPage = Math.min(total, current + 2);
  for (var _page = startPage; _page <= endPage; _page++) {
    itemLinks.push(/*#__PURE__*/_react["default"].createElement(ItemLink, {
      key: _page,
      current: current,
      page: _page,
      onChange: onChange
    }));
  }
  if (startPage - 1 <= total - endPage) {
    itemLinks.push(/*#__PURE__*/_react["default"].createElement(_pagination.PaginationEllipsis, {
      key: "#ellipsis".concat(total)
    }));
    itemLinks.push(/*#__PURE__*/_react["default"].createElement(ItemLink, {
      key: total,
      current: current,
      page: total,
      onChange: onChange
    }));
    return itemLinks;
  }
  itemLinks.unshift(/*#__PURE__*/_react["default"].createElement(_pagination.PaginationEllipsis, {
    key: "#ellipsis1"
  }));
  itemLinks.unshift(/*#__PURE__*/_react["default"].createElement(ItemLink, {
    key: 1,
    current: current,
    page: 1,
    onChange: onChange
  }));
  return itemLinks;
};
var TablePagination = function TablePagination(_ref3) {
  var current = _ref3.current,
    total = _ref3.total,
    onChange = _ref3.onChange;
  var handlePrev = (0, _react.useCallback)(function () {
    onChange(current - 1);
  }, [onChange, current]);
  var handleNext = (0, _react.useCallback)(function () {
    onChange(current + 1);
  }, [onChange, current]);
  return /*#__PURE__*/_react["default"].createElement(_pagination.Pagination, null, /*#__PURE__*/_react["default"].createElement(_pagination.PaginationContent, null, /*#__PURE__*/_react["default"].createElement(_pagination.PaginationItem, null, /*#__PURE__*/_react["default"].createElement(_pagination.PaginationPrevious, {
    onClick: handlePrev,
    disabled: current === 1
  })), /*#__PURE__*/_react["default"].createElement(ItemLinks, {
    current: current,
    total: total,
    onChange: onChange
  }), /*#__PURE__*/_react["default"].createElement(_pagination.PaginationItem, null, /*#__PURE__*/_react["default"].createElement(_pagination.PaginationNext, {
    onClick: handleNext,
    disabled: current === total
  }))));
};
var _default = exports["default"] = TablePagination;