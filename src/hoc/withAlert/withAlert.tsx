import React from 'react';

const withAlert = (WrappedComponent: React.ComponentType<any>) => {
	const ComponentWithAlert = (props) => {
		return (
			<>
				<p>Alert Component</p>
				<WrappedComponent {...props} />
			</>
		);
	};
	return ComponentWithAlert;
};

export default withAlert;
