import React from 'react';
import { Link } from 'react-router';

import styles from './styles/project-brief.css'

const renderDescription = (desc, URL) => {
	if(!desc) { return; }

	return (
		<div className={styles.overlayDescription}>
			<p>{desc}</p>
			{URL ? <Link to={`/project/${URL}`}>
				<div className="btn btn-blue">
					View More
				</div>
			</Link> : ""}
		</div>
	);
}

export default (props) => {
	if(!props.project) { return; }

	const project = props.project;
	const description = project.description;
	const URL = project.URL;

	return (
		<div className="brief-component">
			<div className={styles.brief}>
				<div className={styles.briefImageWrap}>
					<img className={styles.briefImage} src={project.splash} alt={project.title}/>
					<div className={styles.briefImageOverlay}>
						<Link to={`/project/${URL}`}>
							<div className={styles.overlayTitle}>{project.title}</div>
						</Link>
						{renderDescription(description, URL)}	
					</div>
				</div>
			</div> 
		</div>
	);
}