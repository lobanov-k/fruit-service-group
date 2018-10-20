import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dictionary from '../text-configs/dictionary';

class Translator extends Component {
    static propTypes = {
        children: PropTypes.string
    };

    static contextTypes = {
        lang: PropTypes.string.isRequired
    };
    
    render() {
        if (typeof this.props.children != 'string') {
            console.error('Translator needs string children', 'Property passed:', this.props.children);
            return ( this.props.children );
        }

        return (
            <span>
                { dictionary[this.props.children][this.context.lang] }
            </span>
        );
    };
}

export default Translator;