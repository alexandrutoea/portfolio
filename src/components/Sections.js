import React from 'react';

const renderSection = (section) => {
	return(
		<div className="section" key={section.title}>
			<h4>{section.title}</h4>
			<p>{section.content}</p>
		</div>
	);
}

export default (props) => {
	if (!props.sections) { return; }

	return(
		<div className="sections">
			{props.sections.map((section) => {
				return renderSection(section);
			})}
		</div>
	);
}