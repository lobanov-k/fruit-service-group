import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import {productCategories, productList} from '../content-configs/product-carousel';
import Translator from './Translator';

const propTypes = {};

const defaultProps = {};

export default class ProductCarousel extends React.Component {

	state = {
		activeFilter: "all"
	};

	changeFilter = (category) => () => {
		this.setState({activeFilter: category});
	};

	render() {
		const sliderSettings = {
			speed: 500,
			slidesToShow: 6,
			className: "container",
			infinite: false,
			arrows: true
		};

		return (
			<div className="productCarousel">
				<div className="filterBlock container">
					<button 
						className={`filterBtn ${this.state.activeFilter == "all" ? "selected" : ""}`} 
						onClick={this.changeFilter("all")}
					>
						<Translator>all-products</Translator>
					</button>
				{
					productCategories.map((item) => (
						<button 
							className={`filterBtn ${this.state.activeFilter == item.name ? "selected" : ""}`} 
							key={item.name} 
							onClick={this.changeFilter(item.name)}
						>
							<Translator>{item.textWildcard}</Translator>
						</button>
					))
				}
				</div>
				<Slider {...sliderSettings}>
					{
						productList.map((item) => {
							if (this.state.activeFilter == "all" || this.state.activeFilter == item.category)
							return(
								<div key={item.textWildcard}>
									<div className="productItem">
										<div className="productImgBlock">
											<img src={item.img} alt={item.textWildcard}/>
										</div>
										<div className="productNameBlock">
											<Translator>{item.textWildcard}</Translator>
											<a href="#contacts" className="productItemMore">
												<Translator>learn-more</Translator>
											</a>
										</div>
									</div>
								</div>
							)
						})
					}
				</Slider>
			</div>
		);
	}
}

 ProductCarousel.propTypes = propTypes;
 ProductCarousel.defaultProps = defaultProps;