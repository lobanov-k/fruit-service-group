import React from 'react';
import PropTypes from 'prop-types';
import Translator from './Translator';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function CompanyBlock() {
	return (
		<React.Fragment>
			<ScrollableAnchor id={"about"}>
				<div className="companyBlock">
					<div className="container">
						<div className="titleBlock">
							<h2>
								<Translator>company-header</Translator>
							</h2>
						</div>
						<div className="textBlock">
							<div className="main"><Translator>company-text-main</Translator></div>
							<a href="#more" className="moreLink"><Translator>company-more</Translator></a>
							<div className="companyInfo"><Translator>company-info</Translator></div>
						</div>
					</div>
				</div>
			</ScrollableAnchor>
		</React.Fragment>
	);
}