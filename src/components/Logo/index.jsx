import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import LogoHorizontal from './LogoHorizontal';
import LogoVertical from './LogoVertical';
import './Logo.scss';

export const LOGO_COLOR_PRESETS = {
    YELLOW: '#ffd83a',
    PURPLE: '#804a86',
};

export const LOGO_TYPES = {
    VERTICAL_WITHOUT_TEXT: 'VERTICAL',
    HORIZONTAL_WITHOUT_TEXT: 'HORIZONTAL',
    VERTICAL_WITH_TEXT: 'VERTICAL_WITH_TEXT',
    HORIZONTAL_WITH_TEXT: 'HORIZONTAL_WITH_TEXT',
    ONLY_TEXT: 'ONLY_TEXT',
};

const Logo = ({
    type = LOGO_TYPES.HORIZONTAL_WITHOUT_TEXT,
    color = LOGO_COLOR_PRESETS.PURPLE,
    className = '',
    size = 20,
    weight = 3,
}) => {
    return (
        <div className={`__logo-container ${className} `}>
            {type === LOGO_TYPES.ONLY_TEXT ? (
                <></>
            ) : type === LOGO_TYPES.VERTICAL_WITHOUT_TEXT ||
              type === LOGO_TYPES.VERTICAL_WITH_TEXT ? (
                <LogoVertical size={size * 3} color={color} weight={weight} />
            ) : (
                <LogoHorizontal size={size} color={color} weight={weight} />
            )}
            {type === LOGO_TYPES.VERTICAL_WITH_TEXT ||
            type === LOGO_TYPES.HORIZONTAL_WITH_TEXT ||
            type === LOGO_TYPES.ONLY_TEXT ? (
                <p
                    className="__logo-text"
                    style={{
                        color: color,
                        fontSize: size,
                        marginTop: type === LOGO_TYPES.ONLY_TEXT ? 0 : size / 3,
                    }}
                >
                    동삼우소
                </p>
            ) : (
                <></>
            )}
        </div>
    );
};

Logo.propTypes = {
    isVertical: PropTypes.bool,
    hasText: PropTypes.bool,
    color: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.number,
};

export default Logo;
