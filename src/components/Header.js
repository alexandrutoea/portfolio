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
						<span className={styles.subtitle}> ~ Web Development & Design</span>
					</Link>
					<div className={styles.headerLinks}>
						<Link to='/about' className={styles.headerLink}>About & Contact</Link>
						<a className={styles.headerLink} href="https://www.linkedin.com/in/alexandru-toea-49369088" target="_blank">LinkedIn</a>
					</div>
				</div>
			</div>
		</div>
	);
}
