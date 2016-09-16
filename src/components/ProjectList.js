import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	return (
		<div className="project-list-component">
			list of projects
			<Link to="/brief">Brief</Link>
		</div>
	);
}