import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node
};

export default function TextSection(props) {
    return (
        <React.Fragment>
            <div className="textSection">
                <div className="container">
                    {props.children}
                </div>
            </div>
        </React.Fragment>
    );
}

TextSection.propTypes = propTypes;