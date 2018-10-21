import React from 'react';
import PropTypes from 'prop-types';
import Translator from './Translator';

const propTypes = {
	children: PropTypes.node,
	bgColor: PropTypes.string,
	svgArray: PropTypes.array.isRequired,
	bgImage: PropTypes.string
};

const defaultProps = {};

export default function InfoBlock(props) {
	return (
		<React.Fragment>
			<div className="infoBlock" style={{backgroundColor: props.bgColor}}>
				<div className="contentBlock">
					{props.children}
					<div className="svgRow">
						{
							props.svgArray.map((src) => (
								<img src={src} alt={`Fruit Service Group image: ${src}`}/>
							))
						}
					</div>
				</div>
				<div className="imageBg" style={{backgroundImage: `url('${props.bgImage}')`}}/>
			</div>
		</React.Fragment>
	);
}

InfoBlock.propTypes = propTypes;