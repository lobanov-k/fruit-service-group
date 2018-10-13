import React, { Component } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import Translator from './Translator';

class Hero extends Component {
    static propTypes = {
        
    };
    
    render() {
        const settings = {
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
        };

        return (
            <div className="hero">
				<h1><Translator>hero-carousel-header</Translator></h1>
                <Slider {...settings}>
                    <div className="heroCarouselItem">

                    </div>
                </Slider>
            </div>
        )
    };
}

export default Hero;