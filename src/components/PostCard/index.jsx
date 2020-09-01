import React from 'react';
import './postcard.scss';
import PropTypes from 'prop-types';
import moment from 'moment';
import { isNullOrUndefined, isDate } from 'util';

import { useHistory } from 'react-router';

const PostCard = (props) => {
    const history = useHistory();
    return (
        <div
            className={`__post-card-container ${
                isNullOrUndefined(props.className) ? '' : props.className
            }`}
            onClick={() => {
                if (!isNullOrUndefined(props.linkUrl)) {
                    history.push(props.linkUrl);
                }
            }}
        >
            <div className="__post-card-container-header">
                {isNullOrUndefined(props.imgUrl) || props.imgUrl === '' ? (
                    <div className="__post-card-container-img placeholder"></div>
                ) : (
                    <img
                        src={props.imgUrl}
                        alt={`${props.title} 이미지`}
                        className="__post-card-container-img"
                    />
                )}
            </div>
            <div className="__post-card-container-content">
                <p className="__post-card-container-title">{props.title}</p>
                <p className="__post-card-container-date">
                    {moment(props.date).format('YYYY.MM.DD')}
                </p>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.instanceOf(Date).isRequired]),
    imgUrl: PropTypes.string,
    className: PropTypes.string,
    linkUrl: PropTypes.string,
};

export default PostCard;
