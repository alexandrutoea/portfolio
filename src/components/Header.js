import React from 'react';
import { Link } from 'react-router';

import styles from './styles/header.css';

export default (props) => {
	return(
		<div className="header-component">
			<div className={styles.headerOuter}>
				<div className={styles.headerInner}>
					<Link className={styles.headerLink} to="/">
						Alexandru Toea
						<span className={styles.subtitle}> + Some subtitle</span>
					</Link>
					<div className={styles.headerLinks}>
						<a className={styles.headerLink} href="#" target="_blank">Github</a>
						<a className={styles.headerLink} href="#" target="_blank">LinkedIn</a>
					</div>
				</div>
			</div>
		</div>
	);
}
