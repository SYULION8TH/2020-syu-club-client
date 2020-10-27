import React from 'react';
import PropTypes from 'prop-types';
import { MdPerson } from 'react-icons/md';
import './CircleFramedImage.scss';

const CircleFramedImage = (props) => {
    return (
        <div
            style={
                props.width !== null &&
                props.width !== undefined &&
                props.height !== null &&
                props.height !== undefined
                    ? {
                          width: `${props.width}px`,
                          height: `${props.height}px`,
                      }
                    : {}
            }
            className={`__circle-framed-image-container ${
                props.className !== null || props.className !== undefined ? props.className : ''
            }`}
        >
            <div className="__circle-framed-image-wrapper">
                {props.imgUrl !== null && props.imgUrl !== undefined && props.imgUrl !== '' ? (
                    <img className="__circle-framed-image" src={props.imgUrl} alt={props.imgAlt} />
                ) : (
                    <div className="__circle-framed-image-placeholder">
                        <span className="__circle-framed-image-placeholder-icon">
                            <MdPerson></MdPerson>
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

CircleFramedImage.propTypes = {
    className: PropTypes.string,
    imgUrl: PropTypes.string,
    imgAlt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default CircleFramedImage;
