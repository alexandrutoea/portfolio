import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Breadcrumbs from './Breadcrumbs';
import Tags from './Tags';
import Hero from './Hero';
import Sections from './Sections';
import Gallery from './Gallery';
import Loading from './Loading';

import styles from './styles/project-details.css';

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
				<div>
					<p>{this.state.error}</p>
					<Link to="/">Return to home page.</Link>
				</div>
			);
		}

		if (!this.state.loaded) { return <Loading />; }

		const project = this.state.project;

		return(
			<div className="project-details-component">
				<div className={styles.projectDetails}>
				
					<Breadcrumbs title={project.title} />

					<Tags tags={project.tags} links={project.links? project.links : null} />

					<p>{project.description}</p>

					<Hero img={project.splash} alt={project.title}>{project.title}</Hero>

					<Sections sections={project.sections} />

					{project.images? <Gallery photos={project.images} />: ""}
				</div>
			</div>
		);
	}
}

export default ProjectDetails;