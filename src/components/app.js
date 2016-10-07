import React, { Component } from 'react';
import Favicon from 'react-favicon';

import routes from '../routes';
import Header from './Header';
import Footer from './Footer';
import RouteHandler from './RouteHandler';

import styles from './styles/app.css'

export default class App extends Component {
  render() {
    return (
    	<div className={styles.app}>
    		<Favicon url={["img/favicon.ico"]}/>
			<Header />
			<RouteHandler>{this.props.children}</RouteHandler>
			<Footer />
    	</div>
    );
  }
}
