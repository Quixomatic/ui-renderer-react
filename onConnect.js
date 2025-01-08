import {callAsync, noop} from '@quixomatic/ui-internal';

/**
 * Connects the React renderer
 * @method onConnect
 * @private
 * @param {HTMLElement} element Element be connected
 * @param {Function} dispatch function contextualized to the element
 * @param {Function} next function to call after connecting
 */
export default function onConnect(element, dispatch, next = noop) {
	callAsync(next);
}
