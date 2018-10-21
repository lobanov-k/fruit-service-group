import React, { Component } from 'react';
import localeList from '../text-configs/lang-list';
import Select from 'react-select';
import PropTypes from 'prop-types';
import Translator from './Translator';

class Header extends Component {
	static propTypes = {
		handleLangChange: PropTypes.func
	};

	handleChange = (selected) => {
		this.props.handleLangChange(selected.value);
	};

	state = {
		isScrolled: false
	};

	componentDidMount() {
		if (window.scrollY > 0) {
			this.setState({isScrolled: true});
		}
		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				if (this.state.isScrolled) return;
				this.setState({isScrolled: true});
			} else {
				if (!this.state.isScrolled) return;
				this.setState({isScrolled: false});
			}
		});
	};

	render() {
		const langList = Object.keys(localeList).map(value => (
			{
				value,
				label: localeList[value]
			}
		));

		const { selected } = this.props;

		return(
			<header id="header" className={(this.state.isScrolled) ? "pinned" : ""}>
				<div className="logoBlock">
					<a href="/" className="logo">
						<img src="images/fruit-service-group-logo-min.png" alt="Fruit Service Group"/>
					</a>
				</div>
				<nav>
					<ul>
						<li><a href="#about"><Translator>header-about</Translator></a></li>
						<li><a href="#product"><Translator>header-product</Translator></a></li>
						<li><a href="#services"><Translator>header-services</Translator></a></li>
						<li><a href="#contacts"><Translator>header-contacts</Translator></a></li>
						<li>
							<Select 
								options={langList}
								onChange={this.handleChange}
								value={selected}
								className="langSelect"
								defaultValue={langList[0]}
								classNamePrefix="langSelect"
							/>
						</li>
					</ul>
				</nav>
			</header>
		);
	}

}

export default Header;