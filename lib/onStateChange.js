/**
 * Copyright (c) 2020 SalesWon, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = onStateChange;

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));

var _uiInternal = require("@servicenow/ui-internal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var helperNoop = Object.assign(_uiInternal.noop, {
  dispatch: _uiInternal.noop,
  updateState: _uiInternal.noop,
  updateProperties: _uiInternal.noop
});
/**
 * Renders a view using React
 * @method onStateChange
 * @private
 * @param {HTMLElement} element Element to append rendered React component to
 * @param {Function} Component React Component
 * @param {Object} [props = {}] Optional properties object
 * @param {Function} helpers.dispatch Function for dispatching actions
 * @param {Function} helpers.updateState Function for updating component state
 * @param {Function} helpers.updateProperties Function for updating component properties
 * @returns {Promise}
 */

function onStateChange(_x, _x2) {
  return _onStateChange.apply(this, arguments);
}

function _onStateChange() {
  _onStateChange = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(element, Component) {
    var props,
        helpers,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            props = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            helpers = _args.length > 3 && _args[3] !== undefined ? _args[3] : helperNoop;
            _context.next = 4;
            return _reactDom["default"].render(_react["default"].createElement(_ErrorBoundary["default"], {
              helpers: helpers,
              element: element
            }, _react["default"].createElement(Component, _extends({}, props, {
              dispatch: helpers,
              helpers: helpers
            }))), element);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _onStateChange.apply(this, arguments);
}
