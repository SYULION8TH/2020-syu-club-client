import React from 'react';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'util';
import './CircleFramedImage.scss';

const CircleFramedImage = (props) => {
    return (
        <div
            style={
                !isNullOrUndefined(props.width) && !isNullOrUndefined(props.width)
                    ? {
                          width: `${props.width}px`,
                          height: `${props.height}px`,
                      }
                    : {}
            }
            className={`__circle-framed-image-container ${
                isNullOrUndefined(props.className) ? '' : props.className
            }`}
        >
            <div className="__circle-framed-image-wrapper">
                <img className="__circle-framed-image" src={props.imgUrl} alt={props.imgAlt} />
            </div>
        </div>
    );
};

CircleFramedImage.propTypes = {
    className: PropTypes.string,
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default CircleFramedImage;
