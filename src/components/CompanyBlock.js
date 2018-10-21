import React from 'react';
import PropTypes from 'prop-types';
import Translator from './Translator';

const propTypes = {};

const defaultProps = {};

export default function CompanyBlock(props) {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}

CompanyBlock.propTypes = propTypes;
CompanyBlock.defaultProps = defaultProps;