import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Card from '../Card';
import EllipsisText from 'react-ellipsis-text';
import { Link } from 'react-router-dom';
import { GrView, GrLike } from 'react-icons/gr';

import './WidePostCard.scss';

const WidePostCard = ({
    id, // 포스트 아이디
    title, // 포스트 제목
    img, // 포스트 이미지 주소
    date, // 포스트 작성일
    club_id, // 포스트 작성 클럽 아이디
    club, // 포스트 작석 클럽 명
    views, // 포스트 조회 수
    likes, // 포스트 좋아요 수
}) => {
    return (
        <Link to={`/club/${club_id}/post/${id}`} className="wide-post-card-link">
            <Card className="wide-post-card-container" wrapperClassName="wide-post-card-content">
                <div className="wide-post-card-img-container">
                    {img === null || img === undefined || img === '' ? (
                        <div className="wide-post-card-img placeholder"></div>
                    ) : (
                        <img src={img} alt={`${title} 이미지`} className="wide-post-card-img" />
                    )}
                </div>
                <div className="wide-post-card-desc">
                    <div className="wide-post-card-desc-row">
                        <p className="wide-post-card-club-name">{club}</p>
                    </div>
                    <div className="wide-post-card-desc-row">
                        <EllipsisText className="wide-post-card-title" text={title} length={40} />
                    </div>
                    <div className="wide-post-card-desc-row row">
                        <p className="wide-post-card-create-date">
                            {moment(date).format('YYYY-MM-DD')}
                        </p>
                        <div className="wide-post-card-info-wrapper">
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

export default WidePostCard;
