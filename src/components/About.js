import React from 'react';
import { Link } from 'react-router';

import Hero from './Hero';
import Sections from './Sections';
import Gallery from './Gallery';

import styles from './styles/project-details.css';

const intro = [{"URL": "", 
		"title": "", 
		"content": "I'm Alexandru Toea, a Freelance Developer. I do front-end development for web with good back-end and mobile related projects knowledge."
		}];

const about= [{
		"title": "About Me", 
		"content": "I am a freelance developer working from London. I usually work on a per basis project as a front-end developer on web related projects. I enjoy creating rich and interactive experiences for users that convey the client's mesasge in a clear and simple fashion."
		}];

const images = [{
		"src": "../img/urbane/laptop-phone.jpg",
		"width": 960,
		"height": 630,
		"aspectRatio": 1.7,
		"lightboxImage":{
			"src": "../img/urbane/laptop-phone.jpg"
			}
		}, {
		"src": "../img/eg/tablet.jpg",
		"width": 912,
		"height": 608,
		"aspectRatio": 1.4,
		"lightboxImage":{
			"src": "../img/eg/tablet.jpg"
			}
		}, {
		"src": "../img/portfolio/portfolio-project.jpg",
		"width": 1920,
		"height": 2220,
		"aspectRatio": 0.9,
		"lightboxImage":{
			"src": "../img/portfolio/portfolio-project.jpg"
			}
		}, {
		"src": "../img/urbane/menu.jpg",
		"width": 900,
		"height": 600,
		"aspectRatio": 1.5,
		"lightboxImage":{
			"src": "../img/urbane/menu.jpg"
			}
		}, {
		"src": "../img/eg/laptop.jpg",
		"width": 912,
		"height": 600,
		"aspectRatio": 1.5,
		"lightboxImage":{
			"src": "../img/eg/laptop.jpg"
			}
		}
	];

export default (props) => {

	return(
		<div className="about-component">

			<Hero img="img/me_wide.jpg" alt="hello">Hello</Hero>

			<Sections sections={intro} />
			<Sections sections={about} />

			<div>
				<h4>Get in touch!</h4>
				<p>Drop me a line if you enjoy my work - or if you dont ;) feedback is always appreciated</p>
				<ul>
					<li><a href="mailto:alexandrutoea@cloudpioneer.co.uk">alexandrutoea[at]cloudpioneer.co.uk</a> </li>
					<li><a href="tel:+447767385189">+447767385189</a></li>
				</ul>

				<h4>Skills and expertise:</h4>
				<p>I enjoy learning and discovering new technologies and I have developed a skillset that inlcudes:</p>
				<ul>
					<li>frontend & UX development</li>
					<li>backend & API development</li>
					<li><Link to="/skills">Full list of skills</Link></li>
					<li><a href="img/alexandru-toea-public.pdf" target="_blank">Download CV</a></li>
				</ul>
			</div>

			<Gallery photos={images} noTitle={true} />
		</div>
	);
}
