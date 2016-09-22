/*
	Porperties tags and links passed from parent
	"tags": [{"title": "CATEGORY_TITLE","vaules": ["TAG_NAMES"]}]
	"links": [{"site": "SITE_NAME","URL": "SITE_URL"}]
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles/tags.css';

function drawLinks(links) {
	if(!links || !links.length) { return; }

	return(
		<div className={styles.tagCategory}>
			<div className={styles.tagCategoryTitle}>Links</div>
			<div className={styles.tagWrapper}>
				{links.map((link) => {
					return(
						<a href={link.URL} target="_blank" key={link.site}>
							<div className="btn btn-blue">
								{link.site}
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
}

function drawTags(tags) {
	if(!tags) { return; }

	return(
		tags.map((tag) => {
			return (
				<div className={styles.tagCategory} key={tag.title}>
					<div className={styles.tagCategoryTitle}>{tag.title}</div>
					<div className={styles.tagWrapper}>
					{tag.vaules.map((value) => {
						return(
							<div className="btn btn-gray" key={value}>
								{value}
							</div>
						);
					})}
					</div>
				</div>						
			);
		})
	);
}

export default (props) => {

	return(
		<div className="tag-component">
			<div className={styles.tags}>
				{drawTags(props.tags)}
				
				{drawLinks(props.links)}

			</div>
		</div>
	);
}