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
import { unmountComponentAtNode } from 'react-dom';
import { callAsync, noop } from '@servicenow/ui-internal';
/**
 * Unmount a React component from the provided element
 * @method onDisconnect
 * @private
 * @param {HTMLElement} element Element being disconnected
 * @param {Function} [dispatch] function contextualized to the element
 * @param {Function} [next] function to call after disconnect
 */

export default function onDisconnect(element, dispatch, next = noop) {
  callAsync(() => {
    next();
    unmountComponentAtNode(element);
  });
}
//# sourceMappingURL=onDisconnect.js.map