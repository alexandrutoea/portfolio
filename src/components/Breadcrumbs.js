import React from 'react';
import { Link } from 'react-router';

import styles from './styles/breadcrumbs.css';

export default (props) => {
	return(
		<ul className={styles.breadcrumb} >
			<li><Link to="/">Projects</Link></li>
			<li>{props.title}</li>
		</ul>
	);
}