import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import Header from './Header';
import Hero from './Hero';
import LanguageProvider from './LanguageProvider';

class App extends Component {
	static propTypes = {};

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

	render() {
		console.log(this.state);
		return (
			<LanguageProvider lang={this.state.lang}>
				<div className="mainContainer">
					<Header handleLangChange = {this.handleLangChange}/>
					<Hero/>
				</div>
			</LanguageProvider>
		);
	}

	handleLangChange = (lang) => {
		this.setState({lang: lang});
	}
}

export default App;