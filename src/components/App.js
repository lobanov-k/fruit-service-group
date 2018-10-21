import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Hero from './Hero';
import LanguageProvider from './LanguageProvider';
import Translator from './Translator';
import CompanyBlock from './CompanyBlock';
import InfoBlock from './InfoBlock';

import {svgSet1} from '../content-configs/content.js';

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
				</div>
			</LanguageProvider>
		);
	}
}

export default App;