import { createAriaRef } from '@quixomatic/ui-internal';
import onConnect from './onConnect';
import onStateChange from './onStateChange';
import onDisconnect from './onDisconnect';
import createSlot from './createSlot';
import createElement from './createElement';
import Fragment from './Fragment';
//import createElementFromNode from './createElementFromNode';
//import createElementFromString from './createElementFromString';
//import dangerouslyCreateElementFromString from './dangerouslyCreateElementFromString';
import createRef from './createRef';

export default {
	Fragment,
	createElement,
	//createElementFromNode,
	//createElementFromString,
	//dangerouslyCreateElementFromString,
	createRef,
	createSlot,
	onConnect,
	onDisconnect,
	onStateChange,
	deprioritizeStyles: true,
};

export {
	createElement,
	createRef,
	createSlot,
	createAriaRef,
	onConnect,
	onDisconnect,
	onStateChange,
	Fragment,
};
