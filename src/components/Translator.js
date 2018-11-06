import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dictionary from '../text-configs/dictionary';

class Translator extends Component {
    static propTypes = {
        children: PropTypes.string,
        className: PropTypes.string,
        isTag: PropTypes.bool
    };

    static contextTypes = {
        lang: PropTypes.string.isRequired
    };

    render() {
        if (typeof this.props.children != 'string') {
            console.error('Translator needs string children', 'Property passed:', this.props.children);
            return ( this.props.children );
        }

        if (!dictionary[this.props.children]) {
            console.error('No entry in dictionary', 'Property passed:', this.props.children);
            return ( this.props.children );
        }

        if ( typeof this.props.isTag == 'undefined' || this.props.isTag === true) {
            return (
                <span className={this.props.className || ''}>
                    { dictionary[this.props.children][this.context.lang] }
                </span>
            );
        } else {
            return (<React.Fragment>{dictionary[this.props.children][this.context.lang]}</React.Fragment>);
        }

    };
}

export default Translator;