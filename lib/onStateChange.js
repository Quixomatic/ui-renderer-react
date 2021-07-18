/**
 * Copyright (c) 2021 AgilityDex, Inc
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import ReactDom from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars

import ErrorBoundary from './ErrorBoundary'; // eslint-disable-line no-unused-vars

import { noop } from '@servicenow/ui-internal';
const helperNoop = Object.assign(noop, {
  dispatch: noop,
  updateState: noop,
  updateProperties: noop
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

export default async function onStateChange(element, Component, props = {}, helpers = helperNoop) {
  return await ReactDom.render(React.createElement(ErrorBoundary, {
    helpers: helpers,
    element: element
  }, React.createElement(Component, _extends({}, props, {
    dispatch: helpers,
    helpers: helpers
  }))), element);
}
//# sourceMappingURL=onStateChange.js.map