import React, { Component } from 'react';
import localeList from '../text-configs/lang-list';
import Select from 'react-select';
import PropTypes from 'prop-types';

class Header extends Component {
	static propTypes = {
		handleLangChange: PropTypes.func
	};

	render() {
		console.log(localeList);
		const langList = localeList.map(value => (
			{
				value,
				label: value
			}
		));

		const { selected } = this.props;

		return(
			<header>
				<a href="/">Logo</a>
				<nav><li></li></nav>
				<Select 
					options = {langList}
					onChange = {this.handleChange}
					value = {selected}
				/>
			</header>
		);
	}

	handleChange = (selected) => {
		this.props.handleLangChange(selected.value);
	}

}

export default Header;