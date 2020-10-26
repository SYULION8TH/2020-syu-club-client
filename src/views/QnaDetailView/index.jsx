/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { isNullOrUndefined } from 'core-util-is';
import { useHistory } from 'react-router-dom';

import './scss/QnaDetailView.scss';
import { BackgroundImageView } from '../../components';
import { MdChatBubbleOutline } from 'react-icons/md';

import { QnaAPI } from '../../api';

import QnaUserInfo from './QnaUserInfo';
import QnaReplyList from './QnaReplyList';

const QnaDetailView = (props) => {
    const [detail, setDetail] = useState(null);
    const [numOfReplies, setNumOfReplies] = useState(0);
    const clubId = props.match.params.club_id;
    const qnaId = props.match.params.qna_id;
    const history = useHistory();

    const fetch = async () => {
        try {
            const response = await QnaAPI.getQNADetail(clubId, qnaId);
            setDetail(response);
        } catch (e) {
            if (
                !isNullOrUndefined(e.response) &&
                !isNullOrUndefined(e.response.status) &&
                e.response.status === 404
            ) {
                history.push('/not-found');
            }
        }
    };

    useEffect(() => {
        fetch();
    }, [props, props.match, props.match.params]);

    return (
        <BackgroundImageView>
            <div className="qna-detail-view-container">
                <div className="qna-detail-view-header-container">
                    <div className="qna-detail-view-header-row end">
                        <p className="qna-detail-view-title">
                            {!isNullOrUndefined(detail) ? detail.question_title : ''}
                        </p>
                        <p className="qna-detail-view-sub-text">
                            {!isNullOrUndefined(detail)
                                ? moment(detail.created_at).format('YYYY.MM.DD')
                                : ''}
                        </p>
                    </div>
                    <div className="qna-detail-view-header-row center">
                        {!isNullOrUndefined(detail) ? (
                            <QnaUserInfo imgUrl={detail.user.profile} name={detail.user.username} />
                        ) : (
                            <QnaUserInfo
                                imgUrl={`https://mblogthumb-phinf.pstatic.net/MjAxOTEwMjlfNDUg/MDAxNTcyMzI5NDcwNjIz.aW2F-SaHTjtOHNUlRixK7I_scEWzQDe7k-JHLkxj9_wg.fKoqWcVf8Y-vVCKGpIqUCy--2rC8Na4pHoGawaOwmVcg.PNG.moonkuki/SE-c0ad31f7-b153-4905-9f10-9d81b853e1e6.png?type=w800`}
                                name="아무개"
                            />
                        )}
                        <span className="qna-detail-view-sub-text">
                            <MdChatBubbleOutline /> {numOfReplies}
                        </span>
                    </div>
                </div>

                <div className="qna-detail-view-content-container">
                    <p className="qna-detail-view-content-text">
                        {!isNullOrUndefined(detail) ? detail.question_content : ''}
                    </p>
                </div>

                <QnaReplyList qnaId={qnaId} onCount={setNumOfReplies} />
            </div>
        </BackgroundImageView>
    );
};

export default QnaDetailView;
