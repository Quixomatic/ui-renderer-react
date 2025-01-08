import {unmountComponentAtNode} from 'react-dom';
import {callAsync, noop} from '@quixomatic/ui-internal';

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
