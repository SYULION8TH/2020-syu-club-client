import React, { useEffect, useState } from 'react';
import { QnaAPI } from '../../api';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useHistory } from 'react-router';

import { MdChatBubbleOutline } from 'react-icons/md';

const ClubQnaListItem = (props) => {
    const history = useHistory();
    return (
        <div
            className="club-detail-qna-item"
            onClick={() => {
                history.push(`/club/${props.data.club}/qna/${props.data.question_id}`);
            }}
        >
            <p className="club-detail-qna-title">{props.data.question_title}</p>
            <div className="club-detail-qna-content">
                <p className="club-detail-qna-date">
                    {moment(props.data.created_at).format('YYYY.MM.DD')}
                </p>
                <span className="club-detail-qna-replies">
                    <MdChatBubbleOutline /> 10
                </span>
            </div>
        </div>
    );
};

const ClubQnaList = (props) => {
    const [items, setItems] = useState([]);

    const fetch = async (id) => {
        const response = await QnaAPI.getQNAs(props.clubId, {
            limit: 10,
        });
        setItems(response.results);
        // setItems([]);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="club-detail-qna-container">
            {items.map((item, idx) => {
                return <ClubQnaListItem key={idx} data={item} />;
            })}
            {items.length <= 0 ? (
                <div className="club-detail-qna-empty">
                    <p>아직 등록된 문의가 없습니다</p>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

ClubQnaList.propTypes = {
    clubId: PropTypes.string.isRequired,
};

export default ClubQnaList;
