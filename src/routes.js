import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProjectList from './components/ProjectList';
import ProjectBrief from './components/ProjectBrief';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ProjectList} />
		<Route path="brief" component={ProjectBrief} />
	</Route>
);