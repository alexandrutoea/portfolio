import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import Main from './components/Main';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';
import Loading from './components/Loading';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ProjectList} />
		<Route path="project/:projectName" component={ProjectDetails} />
		<Route path="loading" component={Loading} />
		<Redirect from='*' to='/' />
	</Route>
);