import React from 'react';
import { MdChatBubbleOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
import 'moment/locale/ko';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

const QnaListItem = (props) => {
    const history = useHistory();
    return (
        <div
            className="qna-list-view-content-list-item"
            onClick={() => {
                history.push(`/club/${props.data.club}/qna/${props.data.question_id}`);
            }}
        >
            <p className="qna-list-view-content-title">{props.data.question_title}</p>
            <div className="qna-list-view-content-row">
                <div className="qna-list-view-info-item">
                    <p>{props.data.user.username}</p>
                    <p>{moment(props.data.created_at).fromNow()}</p>
                </div>
                <div className="qna-list-view-info-item">
                    <p>
                        <span>
                            <MdChatBubbleOutline />
                        </span>
                        {props.data.comments}
                    </p>
                </div>
            </div>
        </div>
    );
};

QnaListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default QnaListItem;
