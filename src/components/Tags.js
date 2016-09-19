import React from 'react';

export default (props) => {

	function drawLinks(links) {
		if(!links || !links.length) return;

		return(
			<div className="tag">
				<div className="tag-title">Links</div>
				<div className="tag-wrapper">
					{links.map((link) => {
						return(
							<div className="btn btn-blue" key={link.site}>
								{link.site}
							</div>
						);
					})}
				</div>
			</div>
		);
	};

	return(
		<div className="tags">
			{props.tags.map((tag) => {
				return (
					<div className="tag" key={tag.title}>
						<div className="tag-title">{tag.title}</div>
						<div className="tag-wrapper">
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
			})}
			
			{drawLinks(props.links)}

		</div>
	);
}