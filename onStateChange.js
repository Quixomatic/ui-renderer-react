import ReactDom from 'react-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import ErrorBoundary from './ErrorBoundary'; // eslint-disable-line no-unused-vars

import { noop } from '@quixomatic/ui-internal';

const helperNoop = Object.assign(noop, {
	dispatch: noop,
	updateState: noop,
	updateProperties: noop,
});

function _extends() {
	_extends =
		Object.assign ||
		function(target) {
			for (var i = 1; i < arguments.length; i++) {
				var source = arguments[i];
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		};
	return _extends.apply(this, arguments);
}

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
	return await ReactDom.render(
		React.createElement(
			ErrorBoundary,
			{
				helpers: helpers,
				element: element,
			},
			React.createElement(
				Component,
				_extends({}, props, {
					dispatch: helpers,
					helpers: helpers
				})
			)
		),
		element
	);
}
