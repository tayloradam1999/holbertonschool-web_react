import React, { Component } from 'react';


const WithLoggingHOC = (WrappedComponent) => {
	const name = WrappedComponent.displayName || WrappedComponent.name || 'Component';

	class NewComponent extends Component {
		componentDidMount() {
			console.log(`Component ${name} was mounted`);
		}

		componentWillUnmount() {
			console.log(`Component ${name} was unmounted`);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
	NewComponent.displayName = `WithLogging(${name})`;
	return NewComponent;
}

export default WithLoggingHOC