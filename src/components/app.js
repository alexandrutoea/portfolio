import React, { Component } from 'react';

import routes from '../routes';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

export default class App extends Component {
  render() {
    return (
    	<div className="app-component">
			<Header />
			<Main>{this.props.children}</Main>
			<Footer />
    	</div>
    );
  }
}
