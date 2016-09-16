import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	return (
		<div className="project-brief-component">
			Project Brief
			<Link to="/">Back home</Link>
		</div>
	);
}