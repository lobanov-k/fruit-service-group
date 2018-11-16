import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.node
};

export default function Columns(props) {
    return (
        <React.Fragment>
            <div className="columnsBlock">
                <div className="titleBlock">
                    <div className="container">
                        <div className="columnTitle">
                            {props.title}
                        </div>
                    </div>
                </div>
                <div className="mainColumns">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
                <div className="titleBlock">
                    <div className="container">
                        <div className="columnTitle"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

Columns.propTypes = propTypes;