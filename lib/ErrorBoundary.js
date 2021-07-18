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
import { errorTypes, locations, toLower } from '@servicenow/ui-internal';
import log from './log';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    const {
      element,
      helpers
    } = this.props;
    helpers.dispatch(errorTypes.COMPONENT_ERROR_THROWN, {
      host: element.host,
      location: locations.VIEW,
      details: {
        boundaryError: true
      },
      error
    }, {
      internal: true
    }, true);
    this.setState({
      hasError: true
    });
    const tagName = toLower(element.host.tagName);
    const componentId = element.host.getAttribute('component-id');
    log(`An Error occured in <${tagName} component-id="${componentId}"/>. COMPONENT_ERROR_THROWN action type is dispatched with error details.`, {
      error,
      level: 'error'
    });
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }

}

export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map