import React from 'react';
import './card.scss';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'core-util-is';

const index = (props) => {
    return (
        <div
            className={`__card-container ${
                !isNullOrUndefined(props.className) ? props.className : ''
            }`}
        >
            {isNullOrUndefined(props.title) ? (
                <></>
            ) : (
                <div className="__card-container-header">
                    <p className="__card-container-header-text">{props.title}</p>
                </div>
            )}
            <div
                className={`__card-container-content-wrapper ${
                    !isNullOrUndefined(props.wrapperClassName) ? props.wrapperClassName : ''
                }`}
            >
                {props.children}
            </div>
        </div>
    );
};

index.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
};

export default index;
