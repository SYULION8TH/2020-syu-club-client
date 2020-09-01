import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './ClubCard.scss';

import { GrLike } from 'react-icons/gr';
import { BsCardImage } from 'react-icons/bs';
import { useEffect } from 'react';
import { isNullOrUndefined } from 'util';

const ClubCard = (props) => {
    const [hasImage, setHasImage] = useState(false);

    useEffect(() => {
        setHasImage(!isNullOrUndefined(props.imgUrl) && props.imgUrl !== '');
    }, [props, props.imgUrl]);
    return (
        <div
            className={`__club-card-container ${
                !isNullOrUndefined(props.className) ? props.className : ''
            }`}
            onClick={() => {
                if (!isNullOrUndefined(props.onClick)) {
                    props.onClick();
                }
            }}
        >
            <div className={`__club-card-header-wrapper ${hasImage ? '' : 'no-img'}`}>
                <img src={props.imgUrl} alt={`${props.name} 의 로고 이미지`} />
                <div className="__club-card-header-placeholder">
                    <BsCardImage />
                </div>
            </div>
            <div className="__club-card-content-wrapper">
                <p className="__club-card-name">{props.name}</p>
                <div className="__club-card-footer-wrapper">
                    <p className="__club-card-footer-text category">{props.category}</p>
                    <p className="__club-card-footer-text like">
                        <GrLike /> {props.likeCount}
                    </p>
                </div>
            </div>
        </div>
    );
};

ClubCard.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
    likeCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
};

export default ClubCard;
