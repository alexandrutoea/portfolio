import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import About from './components/About';
import Loading from './components/Loading';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ProjectList} />
		<Route path="about" component={About} />
		<Route path="project/:projectName" component={ProjectDetails} />
		<Redirect from='*' to='/' />
	</Route>
);