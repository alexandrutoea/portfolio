import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes'


ReactDOM.render( <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)} routes={routes} />, document.querySelector('.app'));
