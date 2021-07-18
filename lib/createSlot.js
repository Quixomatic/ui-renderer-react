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
import React from 'react';
import { get } from '@servicenow/ui-internal';

const insertChildern = (children, name) => {
  if (!children) return null;
  if (children && !name) return children;
  return React.Children.map(children, child => name === get(child, ['props', 'slot']) ? child : null);
};
/**
 * Creates a slot using React
 * @method createSlot
 * @param children Default children when content is not slotted
 * @param name Name of the slot
 * @returns {*}
 */


export default function createSlot(children, name) {
  return React.createElement("slot", {
    name: name
  }, insertChildern(children, name));
}
//# sourceMappingURL=createSlot.js.map