/*
	Galery component built with react-photo-galery
	Credits: https://github.com/neptunian/react-photo-gallery
*/

import React from 'react';
import Gallery from 'react-photo-gallery';

export default class Galery extends React.Component {
    render() {
    return (
    	<div>
    	<h4> Selected images: </h4>
        <Gallery photos={this.props.photos} />
        </div>
    );
    }
}
