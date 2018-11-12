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
		isScrolled: false,
		isMobMenuOpened: false
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

	toggleMobNav = () => this.setState({ isMobMenuOpened: !this.state.isMobMenuOpened });

	render() {
		const langList = Object.keys(localeList).map(value => (
			{
				value,
				label: localeList[value]
			}
		));

		const { selected } = this.props;

		return(
			<header id="header" className={`header ${(this.state.isScrolled) ? "header--pinned" : ""} ${(this.state.isMobMenuOpened) ? "header--menuOpened" : ""}`}>
				<div className="header__logoBlock">
					<a href="/" className="logo">
						<img className="logo__img" src="images/fruit-service-group-logo-min.png" alt="Fruit Service Group"/>
					</a>
				</div>
				<div className="header__burger" onClick={this.toggleMobNav}>
					<div className="header__burgerLine"/>
					<div className="header__burgerLine"/>
					<div className="header__burgerLine"/>
				</div>
				<nav className="header__navigation">
					<ul className="header__navList">
						<li className="header__navItem"><a className="header__navLink" href="#about"><Translator>header-about</Translator></a></li>
						<li className="header__navItem"><a className="header__navLink" href="#product"><Translator>header-product</Translator></a></li>
						<li className="header__navItem"><a className="header__navLink" href="#services"><Translator>header-services</Translator></a></li>
						<li className="header__navItem"><a className="header__navLink" href="#contacts"><Translator>header-contacts</Translator></a></li>
						<li className="header__navItem">
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