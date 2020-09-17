import React from 'react';
import PropTypes from 'prop-types';

const SocialConnectLink = (props) => {
    return (
        <a
            href={props.to}
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
