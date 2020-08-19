import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';

const index = (props) => {
    return (
        <div className="__card-container">
            <div className="__card-container-header">
                <p className="__card-container-header-text">{props.title}</p>
            </div>
            <div className="__card-container-content-wrapper">{props.children}</div>
        </div>
    );
};

index.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default index;
