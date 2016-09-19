import React from 'react';
import ProjectBrief from './ProjectBrief';
import Tags from './Tags';
import Sections from './Sections';

import { Link } from 'react-router';

const project = {
	title: 'Entrepreneurial Giving',
	tags: [{
			title: "Type",
			vaules: ["Site"]
		}, {
			title: "Tech",
			vaules: ["Wordpress", "Google Apps", "Documents"]
		}, {
			title: "more",
			vaules: ["hello"]
		}
	],
	links: [{
			site: "Github",
			URL: "google.co.uk"
		}, {
			site: "web",
			URL: "yahoo.com"
		}
	],
	description: 'Complex presentation site',
	splash: '../img/eg-laptop.png',
	sections: [{
		title: 'Overview', 
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada elit vestibulum malesuada euismod. Mauris ligula enim, euismod non diam vitae, sagittis aliquet quam. Phasellus tincidunt, augue sed pulvinar vehicula, orci lectus pulvinar ante, id blandit velit nisl ut tellus. Sed felis est, tempus non neque pellentesque, tempor convallis nisl.'
		}, {
		title: 'Details', 
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada elit vestibulum malesuada euismod. Mauris ligula enim, euismod non diam vitae, sagittis aliquet quam. Phasellus tincidunt, augue sed pulvinar vehicula, orci lectus pulvinar ante, id blandit velit nisl ut tellus. Sed felis est, tempus non neque pellentesque, tempor convallis nisl.'
		}
	]
};

export default (props) => {

	return(
		<div className="project-details">
				<ul className="breadcrumb">
				  <li><Link className="title" to="/">Projects</Link></li>
				  <li><span className="title">{project.title}</span></li>
				</ul>

				<Tags tags={project.tags} links={project.links? project.links : null} />

				<div className="project-brief">
					<p>{project.description}</p>
				</div>
				
				<div className="hero">
					<div className="hero-image-wrap">
						<img className="hero-image" src={project.splash} alt="Test image"/>
						<div className="hero-image-overlay">
							<div className="overlay-title">{project.title}</div>
						</div>
					</div>
				</div>

				<Sections sections={project.sections} />

				<div>
					Galery goes here
				</div>
		</div>
	);
}