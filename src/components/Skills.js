import React from 'react';

import Hero from './Hero';

import styles from './styles/project-details.css';

export default (props) => {
	return(
		<div className="skills-component">
			<Hero img="img/keyboard_wide.jpg" alt="Skills"> Skills </Hero>
			
			<h4>WEB DEVELOPMENT</h4>
			<ul>
				<li>HTML 5 / Javascript / CSS 3</li>
				<li>jQuery / React.js / Redux / Polymer.js</li>
				<li>Bootstrap / Material Design</li>
				<li>MongoDB / MySQL / Oracle</li>
				<li>PHP / JSON / XML</li>
				<li>WordPress</li>
				<li>Facebook APIs, Twitter API, Google Maps API, PayPal</li>
			</ul>

			<h4>CLOUD PLATFORMS</h4>
			<ul>
				<li>Google Apps / Office 365 / AWS</li>
			</ul>
			
			<h4>LANGUAGES SPOKEN</h4>
			<ul>
				<li>English,</li>
				<li>Romanian,</li>
				<li>French (intermediate),</li>
				<li>German (basic)</li>
			</ul>
		</div>
	);
}