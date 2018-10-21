import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Hero from './Hero';
import LanguageProvider from './LanguageProvider';
import CompanyBlock from './CompanyBlock';

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
				</div>
			</LanguageProvider>
		);
	}
}

export default App;