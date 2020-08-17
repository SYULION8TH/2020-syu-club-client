import React from 'react';
import propTypes from 'prop-types';
import './AnimatedMenuIcon.scss';

const AnimatedMenuIcon = (props) => {
    const _onclick = () => {
        props.setIsOpened(!props.isOpened);
    };
    return (
        <div className={`animated-menu-icon ${props.isOpened ? 'active' : ''}`} onClick={_onclick}>
            <div className="animated-menu-row"></div>
            <div className="animated-menu-row"></div>
            <div className="animated-menu-row"></div>
        </div>
    );
};

AnimatedMenuIcon.propTypes = {
    isOpened: propTypes.bool.isRequired,
    setIsOpened: propTypes.func.isRequired,
};

export default AnimatedMenuIcon;
