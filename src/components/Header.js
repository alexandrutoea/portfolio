import React from 'react';
import { Link } from 'react-router';

export default (props) => {
	return(
		<div className="header-component">
			<div className="navigation-exterior">
				<div className="navigation-interior">
					<div className="navigation-link">
						<Link to="/"><span>Site</span></Link>
						<span className="subtitle">+ Some subtitle</span>
					</div>
					<div className="navigation-links">
						<a className="navigation-link" href="#" target="_blank">Github</a>
						<a className="navigation-link" href="#" target="_blank">LinkedIn</a>
					</div>
				</div>
			</div>
		</div>
	);
} 
