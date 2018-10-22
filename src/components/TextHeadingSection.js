import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.node
};

export default function TextHeadingSection(props) {
	return (
		<React.Fragment>
			<div className="textHeadingSection">
				<div className="container">
					{props.children}
				</div>
			</div>
		</React.Fragment>
	);
}

TextHeadingSection.propTypes = propTypes;