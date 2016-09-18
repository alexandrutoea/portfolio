import React from 'react';
import ProjectBrief from './ProjectBrief';

import { Link } from 'react-router';

const project = {id: '1', title: 'Entrepreneurial Giving', splash: '../img/eg-laptop.png'};

export default (props) => {
	return(
		<div className="project-details">
				<div className="title"> <Link to="/">Projects</Link> ... {project.title}</div>

				<div className="project-hero">
					<div className="project-hero-image-wrap">
						<img className="project-hero-image" src={project.splash} alt="Test image"/>
						<div className="project-hero-image-overlay">
							<div className="overlay-title">{project.title}</div>
						</div>
					</div>
				</div>

				<div>
					Project description goes here
				</div>
		</div>
	);
}