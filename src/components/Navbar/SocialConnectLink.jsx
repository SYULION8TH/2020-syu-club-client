import React from 'react';
import PropTypes from 'prop-types';

const SocialConnectLink = (props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a
            href={`${process.env.REACT_APP_API_HOST}${props.to}`}
            className={
                props.className !== undefined && props.className !== null
                    ? `menu-link-item ${props.className}`
                    : 'menu-link-item'
            }
        >
            {props.children}
        </a>
    );
};

SocialConnectLink.propsTypes = {
    className: PropTypes.string,
    to: PropTypes.string.isRequired,
};

export default SocialConnectLink;
