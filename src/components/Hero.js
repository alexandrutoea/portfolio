import React from 'react';

import styles from './styles/project-details.css';

export default (props) => {
	return (
		<div className="hero-component">
			<div className={styles.hero}>
				<div className={styles.heroImageWrap}>
					<img className={styles.heroImage} src={props.img} alt={props.alt}/>
					<div className={styles.heroImageOverlay}>
						<div className={styles.overlayTitle}>{props.children}</div>
					</div>
				</div>
			</div>
		</div>
	);
}