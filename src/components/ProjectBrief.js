import React from 'react';
import { Link } from 'react-router';

const renderDescription = (desc, URL) => {
	return (
		<div className="overlay-description">
			<p>{desc}</p>
			<div className="btn btn-blue">
				<Link to={`/project/${URL}`}>Open Project</Link>
			</div>
		</div>
	);
}

export default (props) => {
	if(!props.project) {return(<div>Error</div>);}

	const description = props.project.description;
	const URL = props.project.URL;

	return (
		<div className="brief-component">
			<div className="brief">
				<div className="brief-image-wrap">
					<img className="brief-image" src={props.project.splash} alt="Test image"/>
					<div className="brief-image-overlay">
						<Link to={`/project/${URL}`}>
							<div className="overlay-title">{props.project.URL}</div>
						</Link>
						{description ? renderDescription(description, URL) : null}	
					</div>
				</div>
			</div> 
		</div>
	);
}