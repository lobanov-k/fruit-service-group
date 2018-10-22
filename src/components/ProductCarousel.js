import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import {productCategories} from '../content-configs/product-carousel';
import Translator from './Translator';

const propTypes = {};

const defaultProps = {};

export default class ProductCarousel extends React.Component {

	state = {
		activeFilter: "all"
	};

	changeFilter(category) {
		this.setState({activeFilter: category});
	}

	render() {
		return (
			<div className="productCarousel">
				<div className="filterBlock">
					productCategories.map((item) => (
						<button className="filterBtn" >
							<Translator>{item.textWildcard}</Translator>
						</button>
					))
				</div>
			</div>
		);
	}
}

 ProductCarousel.propTypes = propTypes;
 ProductCarousel.defaultProps = defaultProps;