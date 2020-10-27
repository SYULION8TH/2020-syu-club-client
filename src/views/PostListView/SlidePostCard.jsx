import React from 'react';
import moment from 'moment';
import Card from '../../components/Card';
import EllipsisText from 'react-ellipsis-text';
import { Link } from 'react-router-dom';
import { GrView, GrLike } from 'react-icons/gr';

import './scss/SlidePostCard.scss';

const SlidePostCard = ({ title, id, img, date, club, club_id, views, likes }) => {
    return (
        <Link className="__slide-post-card-link" to={`/club/${club_id}/post/${id}`}>
            <Card
                className="__slide-post-card-container"
                wrapperClassName="__slide-post-card-content"
            >
                <div className="__slide-post-card-img-container">
                    {img === null || img === undefined || img === '' ? (
                        <div className="__slide-post-card-img placeholder"></div>
                    ) : (
                        <img src={img} alt={`${title} 이미지`} className="__slide-post-card-img" />
                    )}
                </div>
                <div className="__slide-post-card-desc">
                    <div className="__slide-post-card-desc-row">
                        <p className="__slide-post-card-club-name">{club}</p>
                    </div>
                    <div className="__slide-post-card-desc-row">
                        <EllipsisText
                            className="__slide-post-card-title"
                            text={title}
                            length={15}
                        />
                    </div>
                    <div className="__slide-post-card-desc-row row">
                        <p className="__slide-post-card-create-date">
                            {moment(date).format('YYYY-MM-DD')}
                        </p>
                        <div className="__slide-post-card-info-wrapper">
                            <span>
                                <GrView />
                                <b>{views}</b>
                            </span>
                            <span>
                                <GrLike />
                                <b>{likes}</b>
                            </span>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    );
};

export default SlidePostCard;
