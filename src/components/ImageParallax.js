import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	image: PropTypes.string.isRequired
};

export default function ImageParallax(props) {
	return (
		<React.Fragment>
			<div 
				className="parallaxImage"
				style={{backgroundImage: props.image}}
			/>
		</React.Fragment>
	);
}

ImageParallax.propTypes = propTypes;