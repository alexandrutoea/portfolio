import React from 'react';
import { Link } from 'react-router';

import Sections from './Sections';
import ProjectBrief from './ProjectBrief';
import Gallery from './Gallery';

const about_brief = {"URL": "", 
		"title": "Hello", 
		"description": "I'm Alexandru Toea, a Freelance Developer. I do front-end development for web with good back-end and mobile related projects knowledge.", 
		"splash": "img/me_wide.jpg"
};

const about= [ {
		"title": "About Me", 
		"content": "I am a freelance developer working from London. I usually work on a per basis project as a front-end developer on web related projects. I enjoy creating rich and interactive experiences for users that convey the client's mesasge in a clear and simple fashion."
		}
	];

const images = [{
		"src": "../img/urbane/laptop-phone_small.jpg",
		"width": 960,
		"height": 630,
		"aspectRatio": 1.7,
		"lightboxImage":{
			"src": "../img/urbane/laptop-phone_large.jpg"
			}
		}, {
		"src": "../img/urbane/tablet_small.jpg",
		"width": 960,
		"height": 640,
		"aspectRatio": 1.4,
		"lightboxImage":{
			"src": "../img/urbane/tablet_large.jpg"
			}
		}, {
		"src": "../img/urbane/urbane-full.png",
		"width": 1380,
		"height": 4200,
		"aspectRatio": 0.3,
		"lightboxImage":{
			"src": "../img/urbane/urbane-full.png"
			}
		}, {
		"src": "../img/urbane/urbane-mobile-menu_small.png",
		"width": 900,
		"height": 600,
		"aspectRatio": 1.5,
		"lightboxImage":{
			"src": "../img/urbane/urbane-mobile-menu_large.png"
			}
		}
	]

export default (props) => {

	return(
		<div className="about-component">

			<ProjectBrief project={about_brief}/>
			<Sections sections={about} />

			<div>
				<h4>Get in touch!</h4>
				<p>
				<a href="mailto:alexandrutoea@cloudpioneer.co.uk">alexandrutoea[at]cloudpioneer[dot]co[dot]uk</a> <br />
				+47767385189
				</p>

				<h4>Skills and expertise:</h4>
				<p>I enjoy learning and discovering new technologies and I have developed a skillset that inlcudes:</p>
				<ul>
					<li>frontend & UX development</li>
					<li>backend & API development</li>
					<li><Link to="/skills">Full list of skills</Link></li>
					<li><a href="#" target="_blank"> Download CV </a></li>
				</ul>
			</div>

			<Gallery photos={images} noTitle={true} />
		</div>
	);
}
