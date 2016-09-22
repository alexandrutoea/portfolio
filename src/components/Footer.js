import React from 'react';

import styles from './styles/footer.css';

export default (props) => {	
	return(
		<div className="footer-component">
			<div className={styles.footerOuter}>
				<div className={styles.footerInner}>
					<p>Copyright © 2016 <strong>Alexandru Toea</strong>.</p>
				</div>
			</div>
	    </div>
	);
}