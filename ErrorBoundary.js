import React from 'react';
import {errorTypes, locations, toLower, allLogTypes as logTypes} from '@quixomatic/ui-internal';
import log from './log';

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	componentDidCatch(error) {
		const {element, helpers} = this.props;

		helpers.dispatch(
			errorTypes.COMPONENT_ERROR_THROWN,
			{host: element.host, location: locations.VIEW, details: {boundaryError: true}, error},
			{internal: true},
			true
		);

		this.setState({hasError: true});

		const tagName = toLower(element.host.tagName);
		const componentId = element.host.getAttribute('component-id');

		log(
			`An Error occured in <${tagName} component-id="${componentId}"/>. COMPONENT_ERROR_THROWN action type is dispatched with error details.`,
			{error, level: logTypes.ERROR, host: element.host, origin: 'componentDidCatch'}
		);
	}

	render() {
		if (this.state.hasError) return null;

		return this.props.children;
	}
}

export default ErrorBoundary;
