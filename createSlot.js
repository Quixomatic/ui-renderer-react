import React from 'react';
import { get } from '@quixomatic/ui-internal';

const insertChildern = (children, name) => {
	if (!children) return null;

	if (children && !name) return children;

	return React.Children.map(children, (child) => (name === get(child, ['props', 'slot']) ? child : null));
};

/**
 * Creates a slot using React
 * @method createSlot
 * @param children Default children when content is not slotted
 * @param name Name of the slot
 * @returns {*}
 */
export default function createSlot(children, name) {
	return React.createElement(
		'slot',
		{
			name: name,
		},
		insertChildern(children, name)
	);
}
