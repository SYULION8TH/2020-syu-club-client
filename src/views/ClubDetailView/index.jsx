/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ClubsAPI } from '../../api';

import ClubPostList from './ClubPostList';
import ClubQnaList from './ClubQnaList';
import SubMenuContainer from './SubMenuContainer';
import moment from 'moment';
import { isNullOrUndefined } from 'util';

import { AiFillHeart, AiOutlineHeart, AiOutlineLoading3Quarters } from 'react-icons/ai';

import './scss/ClubDetailView.scss';

const ClubDetailView = (props) => {
    const clubId = props.match.params.club_id;
    const [clubInfo, setClubInfo] = useState(null);

    const fetch = {
        info: async () => {
            const response = await ClubsAPI.getClub(clubId);
            setClubInfo(response);
        },
    };

    useEffect(() => {
        fetch.info();
    }, [props.match]);

    return (
        <div className="club-detail-container">
            <div className="club-detail-header-container">
                {!isNullOrUndefined(clubInfo) ? (
                    <img src={clubInfo.club_img_url} alt="동아리 이미지" />
                ) : (
                    <></>
                )}
                <span className="club-detail-header-img-indicator">
                    <AiOutlineLoading3Quarters />
                </span>
            </div>
            <div className="club-detail-body-container">
                <div className="club-detail-info-container">
                    <div className="club-detail-info-header">
                        <div className="club-detail-info-header-title">
                            <div className="div club-detail-info-header-row">
                                <p className="club-detail-info-title">
                                    {!isNullOrUndefined(clubInfo) ? clubInfo.club_name : ''}
                                </p>
                            </div>
                            <div className="div club-detail-info-header-row">
                                <p className="club-detail-info-category">
                                    {!isNullOrUndefined(clubInfo) ? clubInfo.club_type_desc : ''}
                                </p>
                                <span
                                    className={`club-detail-info-view ${
                                        !isNullOrUndefined(clubInfo) && clubInfo.user_like
                                            ? 'liked'
                                            : ''
                                    }`}
                                >
                                    {!isNullOrUndefined(clubInfo) && clubInfo.user_like ? (
                                        <AiFillHeart />
                                    ) : (
                                        <AiOutlineHeart />
                                    )}{' '}
                                    {!isNullOrUndefined(clubInfo) ? clubInfo.likes : ''}
                                </span>
                            </div>

                            <div className="club-detail-info-header-row">
                                <p className="club-detail-info-desc">
                                    {!isNullOrUndefined(clubInfo) ? clubInfo.club_desc : ''}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <SubMenuContainer title="동아리 포스트 목록" linkUrl={`/club/${clubId}/post`}>
                    <ClubPostList clubId={clubId} />
                </SubMenuContainer>
                <SubMenuContainer title="동아리 QNA 목록" linkUrl={`/club/${clubId}/qna`}>
                    <ClubQnaList clubId={clubId} />
                </SubMenuContainer>
            </div>
        </div>
    );
};

export default ClubDetailView;
