import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default (props) => {
	return(
		<div className="main-component">
			<ReactCSSTransitionGroup 
				transitionName="appear"
				transitionEnterTimeout={500} 
				transitionLeaveTimeout={500} >
				{React.cloneElement(props.children, {key: location.pathname})}

			</ReactCSSTransitionGroup>
		</div>
	);
}