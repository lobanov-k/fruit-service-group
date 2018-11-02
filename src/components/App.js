import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Hero from './Hero';
import LanguageProvider from './LanguageProvider';
import Translator from './Translator';
import CompanyBlock from './CompanyBlock';
import InfoBlock from './InfoBlock';
import TextHeadingSection from './TextHeadingSection';
import ProductCarousel from './ProductCarousel';
import ImageParallax from './ImageParallax';
import Columns from './Columns';
import TextSection from './TextSection';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';

import {svgSet1, svgSet2} from '../content-configs/content.js';

configureAnchors({offset: -120});

class App extends Component {
	static childContextTypes = {
		lang: PropTypes.string,
	};

	state = {
		lang: 'ru'
	};

	getChildContext() {
		return {
			lang: this.state.lang
		};
	}

	handleLangChange = (lang) => {
		this.setState({lang});
	}

	render() {
		return (
			<LanguageProvider lang={this.state.lang}>
				<div className="mainContainer">
					<Header handleLangChange = {this.handleLangChange}/>
					<Hero/>
					<CompanyBlock/>
					<InfoBlock svgArray={svgSet1} bgColor="#EBC809" bgImage="/images/content/9.jpg">
						<div className="textBlock"><Translator>info-block-text-1</Translator></div>
						<div className="textBlock"><Translator>info-block-text-2</Translator></div>
					</InfoBlock>
					<TextHeadingSection>
						<ScrollableAnchor id={"product"}>
							<h3 className="heading">
								<Translator>product-head</Translator>
							</h3>
						</ScrollableAnchor>
						<div className="text">
							<p><Translator>product-text-1</Translator></p>
							<p><Translator>product-text-2</Translator></p>
						</div>
					</TextHeadingSection>
					<ProductCarousel/>
					<ImageParallax image="/images/content/2.png"/>
					<TextHeadingSection>
						<ScrollableAnchor id={"services"}>
							<h3 className="heading">
								<Translator>services</Translator>
							</h3>
						</ScrollableAnchor>
					</TextHeadingSection>
					<InfoBlock svgArray={svgSet2} bgColor="#547A31" bgImage="/images/content/1.jpg">
						<div className="textBlock"><Translator>services-text-1</Translator></div>
						<div className="textBlock"><Translator>services-text-2</Translator></div>
					</InfoBlock>
					<TextHeadingSection/>
					<Columns title={<Translator>services-column-title</Translator>}>
						<div className="columnText">
							<Translator>services-column-text-1</Translator>
							<Translator>services-column-text-2</Translator>
							<Translator>services-column-text-3</Translator>
							<Translator>services-column-text-4</Translator>
							<button className="yellowBtn">
								<Translator>company-more</Translator>
							</button>
						</div>
						<div className="imagesColBlock">
							<div className="imgBlock" style={{backgroundImage: "url('/images/content/8.jpg')"}}/>
							<div className="imgBlock" style={{backgroundImage: "url('/images/content/7.jpg')"}}/>
						</div>
					</Columns>
					<TextSection>
						<h3 className="subheader">
							<Translator>services-transport-header</Translator>
						</h3>
						<div className="text">
							<Translator>services-column-text-1</Translator>
						</div>
						<div className="text">
							<Translator>services-column-text-2</Translator>
						</div>
						<div className="text">
							<Translator>services-column-text-3</Translator>
						</div>
						<div className="text">
							<Translator>services-column-text-4</Translator>
						</div>
					</TextSection>
					<ImageParallax image="/images/content/5.jpg"/>
					<TextSection/>
				</div>
			</LanguageProvider>
		);
	}
}

export default App;