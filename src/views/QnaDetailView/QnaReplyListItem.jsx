import React, { useEffect, useState } from 'react';
import moment from 'moment';

import QnaUserInfo from './QnaUserInfo';
import PropTypes from 'prop-types';
import { BsArrowReturnRight } from 'react-icons/bs';
import { GoReply } from 'react-icons/go';

import { useSelector } from 'react-redux';
import { isNullOrUndefined } from 'util';

const QnaReplyListItem = (props) => {
    const { info } = useSelector((state) => state.user);
    const [isWrittenFromMe, setIsWrittenFromMe] = useState(false);

    useEffect(() => {
        if (!isNullOrUndefined(info.data)) {
            setIsWrittenFromMe(info.data.user.id === props.data.user);
        }
    }, [info.data]);

    return (
        <div className="qna-detail-reply-list-item">
            <div className="qna-detail-reply-list-item-row">
                <div className="qna-detail-reply-list-item-user-row">
                    <QnaUserInfo
                        imgUrl=""
                        name="아무개"
                        className={isWrittenFromMe ? 'my-comment' : ''}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            props.onSelected(props.data);
                        }}
                    >
                        <GoReply /> 댓글 달기
                    </button>
                </div>
                <p className="qna-detail-reply-list-item-content">{props.data.qna_reply_content}</p>
                <p className="qna-detail-reply-list-item-date">
                    {moment(props.data.created_at).format('YYYY.MM.DD')}
                </p>
            </div>

            {props.data.reply.map((item, idx) => {
                let isWrittenFromMeToo = false;
                if (!isNullOrUndefined(info.data)) {
                    isWrittenFromMeToo = info.data.user.id === item.user;
                }
                return (
                    <div key={idx} className="qna-detail-reply-list-item-row">
                        <BsArrowReturnRight className="qna-detail-reply-list-item-decorator" />
                        <QnaUserInfo
                            imgUrl=""
                            name="아무개"
                            className={isWrittenFromMeToo ? 'my-comment' : ''}
                        />
                        <p className="qna-detail-reply-list-item-content">
                            {item.qna_reply_content}
                        </p>
                        <p className="qna-detail-reply-list-item-date">
                            {moment(item.created_at).format('YYYY.MM.DD')}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

QnaReplyListItem.propTypes = {
    data: PropTypes.object.isRequired,
    onSelected: PropTypes.func.isRequired,
};

export default QnaReplyListItem;