import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import ProjectBrief from './ProjectBrief';
import Tags from './Tags';
import Sections from './Sections';



class ProjectDetails extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {
			project: {},
			error: ""
		}
	}

	componentWillMount() {
		var _this = this;

		axios.get(`/projects/${this.props.params.projectName}.json`)
			.then(function (response) {
				_this.setState({project: response.data});
			})
	  		.catch(function (error) {
	  			_this.setState({error: "Project does not exist or cannot be loaded"});
			});
	}

	render(){
		const project = this.state.project;

		if(this.state.error) {
			return (
				<div className="project-details">
				<ul className="breadcrumb">
					<li><Link className="title" to="/">Projects</Link></li>
				</ul>
				<div>{this.state.error}</div>
				</div>
			);
		}

		if(!project.title) {return <div>Loading</div>; }

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
}

export default ProjectDetails;