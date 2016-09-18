import React from 'react';
import { Link } from 'react-router';

const renderDescription = (desc) => {
	return (
		<div className="overlay-description">
			<p>{desc}</p>
			<Link className="btn blue" to={`/project/`}>Open Project</Link>
		</div>
	);
}

export default (props) => {
	if(!props.project) {return(<div>Error</div>);}

	const description = props.project.description;

	return (
		<div className="brief-component">
			<div className="brief">
				<div className="brief-image-wrap">
					<img className="brief-image" src={props.project.splash} alt="Test image"/>
					<div className="brief-image-overlay">
						<Link to={`/project/`}>
							<div className="overlay-title">{props.project.title}</div>
						</Link>
						{description ? renderDescription(description) : ""}	
					</div>
				</div>
			</div> 
		</div>
	);
}