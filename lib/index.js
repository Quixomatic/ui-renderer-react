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
Object.defineProperty(exports, "createSlot", {
  enumerable: true,
  get: function get() {
    return _createSlot["default"];
  }
});
exports["default"] = void 0;

var _onConnect = _interopRequireDefault(require("./onConnect"));

var _onStateChange = _interopRequireDefault(require("./onStateChange"));

var _onDisconnect = _interopRequireDefault(require("./onDisconnect"));

var _createSlot = _interopRequireDefault(require("./createSlot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  createSlot: _createSlot["default"],
  onConnect: _onConnect["default"],
  onDisconnect: _onDisconnect["default"],
  onStateChange: _onStateChange["default"],
  deprioritizeStyles: true
};
exports["default"] = _default;
//# sourceMappingURL=index.js.map