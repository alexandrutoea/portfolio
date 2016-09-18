import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Main from './components/Main';
import ProjectList from './components/ProjectList';
import ProjectDetails from './components/ProjectDetails';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ProjectList} />
		<Route path="project" component={ProjectDetails} />
	</Route>
);