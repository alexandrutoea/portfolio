import React from 'react';
import { Link } from 'react-router';

import ProjectBrief from './ProjectBrief';

const projects = [
	{id: '1', title: 'EG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada elit vestibulum malesuada euismod. Mauris ligula enim, euismod non diam vitae, sagittis aliquet quam. Phasellus tincidunt, augue sed pulvinar vehicula, orci lectus pulvinar ante, id blandit velit nisl ut tellus. Sed felis est, tempus non neque pellentesque, tempor convallis nisl.', splash: 'img/eg-laptop.png'},
	{id: '2', title: 'Urbane', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada elit vestibulum malesuada euismod. Mauris ligula enim, euismod non diam vitae, sagittis aliquet quam. Phasellus tincidunt, augue sed pulvinar vehicula, orci lectus pulvinar ante, id blandit velit nisl ut tellus. Sed felis est, tempus non neque pellentesque, tempor convallis nisl.', splash: 'img/urbane-mobile.png'},
	{id: '3', title: 'project 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce malesuada elit vestibulum malesuada euismod. Mauris ligula enim, euismod non diam vitae, sagittis aliquet quam. Phasellus tincidunt, augue sed pulvinar vehicula, orci lectus pulvinar ante, id blandit velit nisl ut tellus. Sed felis est, tempus non neque pellentesque, tempor convallis nisl.', splash: 'img/test.jpg'},
	{id: '4', title: 'project 4', splash: 'img/test.jpg'}
]

export default (props) => {
	return (
		<div className="project-list-component">
			<div className="title">List of projects</div>
			
			<div className="project-list">
				{projects.map((project) => {
					return <ProjectBrief project={project} key={project.id} />
				})}
			</div>
		</div>
	);
}