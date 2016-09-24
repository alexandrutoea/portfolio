import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Breadcrumbs from './Breadcrumbs';
import Tags from './Tags';
import Sections from './Sections';
import Galery from './Galery';
import Loading from './Loading';

class ProjectDetails extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {
			project: {},
			loaded: 0,
			error: ""
		}
	}

	componentWillMount() {
		var _this = this;

		axios.get(`/projects/${this.props.params.projectName}.json`)
			.then(function (response) {
				_this.setState({project: response.data , loaded: 1});
			})
	  		.catch(function (error) {
	  			_this.setState({error: "Project does not exist or cannot be loaded"});
			});
	}

	render(){
		if(this.state.error) {
			return (
				<div>{this.state.error}</div>
			);
		}

		if (!this.state.loaded) { return <Loading />; }

		const project = this.state.project;

		return(
			<div className="project-details">
			
					<Breadcrumbs title={project.title} />

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
						<Galery photos={project.images} />
					</div>
			</div>
		);
	}
}

export default ProjectDetails;