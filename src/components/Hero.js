import React, { Component } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import Translator from './Translator';
import FeaturesBlock from './FeaturesBlock';

class Hero extends Component {
    static propTypes = {};
    
    render() {
        const bgImages = [
            "1.jpg",
            "2.jpg",
            "3.jpg"
        ];

        const carouselSettings = {
            className: "heroBgSlider",
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 3000,
            fade: true
        };

        return (
            <div className="hero">
                <div className="container">
                    <div className="carouselControls">
                        <div className="prev"></div>
                        <div className="next"></div>
                    </div>
                    <h2><Translator>hero-carousel-subheader</Translator></h2>
                    <h1><Translator>hero-carousel-header</Translator></h1>
                    <button className="connectBtn">
                        <Translator>connect</Translator>
                    </button>
                    <FeaturesBlock></FeaturesBlock>
                </div>
                <Slider {...carouselSettings} >
                    {
                        bgImages.map(img => (
                            <div>
                                <div key={img}
                                    className="heroCarouselItem" 
                                    style={{backgroundImage: `url('images/hero-bg/${img}')`}}>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        )
    };
}

export default Hero;