import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import ProjectBrief from './ProjectBrief';
import Loading from './Loading';

class ProjectList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list: {},
			loaded: 0,
			error: ""
		}
	}

	componentWillMount() {
		var _this = this;

		axios.get(`/projects/project-list.json`)
			.then(function (response) {
				_this.setState({list: response.data.list, loaded: 1});
			})
	  		.catch(function (error) {
	  			_this.setState({error: "Project list cannot be loaded"});
			});
	}

	render(){
		if(this.state.error) {
			return (
				<div>{this.state.error}</div>
			);
		}

		if (!this.state.loaded) { return <Loading />; }

		return (
			<div className="project-list-component">
				<h4>Quick Notice: Page is in active development.</h4>
				<p> I expect to finish it by the end of this week. So untill then there might be occasional bugs and issues!</p>				
				<div className="project-list">
					{this.state.list.map((project) => {
						return <ProjectBrief project={project} key={project.URL} />
					})}
				</div>
			</div>
		);
	}
}

export default ProjectList;