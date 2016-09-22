import React from 'react';
import { RouteTransition } from 'react-router-transition';

export default (props) => {
	return(
		<div className="main-component">
			<RouteTransition
				pathname={location.pathname}
				atEnter={{ opacity: 0 }}
				atLeave={{ opacity: 0 }}
				atActive={{ opacity: 1 }}
				>
				{props.children}
			</RouteTransition>
		</div>
	);
}