import React from 'react';
import './postcard.scss';
import PropTypes from 'prop-types';
import moment from 'moment';
import { isNullOrUndefined, isDate } from 'util';

const index = (props) => {
    return (
        <div className="__post-card-container">
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

index.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired | PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
};

export default index;
