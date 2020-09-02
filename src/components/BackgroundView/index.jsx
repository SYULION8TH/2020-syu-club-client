import React from 'react';
import './BackgroundView.scss';
import bgStar from '../../assets/img/bg_stars@2x.png';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'util';

const BackgroundImageView = (props) => {
    return (
        <div className="__background-image-view-container">
            <div className="__background-image-view-header-container">
                <img src={bgStar} alt="배경 별 이미지" />
                {!isNullOrUndefined(props.header) ? (
                    <div className="__background-image-view-header-wrapper">{props.header}</div>
                ) : (
                    <></>
                )}
            </div>
            <div className="__background-image-view-body-container">{props.children}</div>
        </div>
    );
};

BackgroundImageView.propTypes = {
    className: PropTypes.string,
    header: PropTypes.element,
};

export default BackgroundImageView;
