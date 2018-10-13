import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LanguageProvider extends Component {
    static propTypes = {
        lang: PropTypes.string
    };

	static childContextTypes = {
		lang: PropTypes.string
	}

	getChildContext() {
		return {
			lang: this.props.lang
		}
	}
    
    render() {
        return (
            <div>
				{this.props.children}
            </div>
        )
    }
}

export default LanguageProvider;