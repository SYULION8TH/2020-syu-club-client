/* eslint-disable react-hooks/exhaustive-deps */
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
        if (!isNullOrUndefined(info.data) && !isNullOrUndefined(props.data.user)) {
            setIsWrittenFromMe(info.data.user.id === props.data.user.id);
        }
    }, [info.data]);

    return (
        <div className="qna-detail-reply-list-item">
            <div className="qna-detail-reply-list-item-row">
                <div className="qna-detail-reply-list-item-user-row">
                    {!isNullOrUndefined(info.data) ? (
                        <QnaUserInfo
                            imgUrl={info.data.user.profile}
                            name={info.data.user.username}
                            className={isWrittenFromMe ? 'my-comment' : ''}
                        />
                    ) : (
                        <QnaUserInfo imgUrl="" name="아무개" />
                    )}
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
                if (!isNullOrUndefined(info.data) && !isNullOrUndefined(item.user)) {
                    isWrittenFromMeToo = info.data.user.id === item.user.id;
                }
                return (
                    <div key={idx} className="qna-detail-reply-list-item-row">
                        <BsArrowReturnRight className="qna-detail-reply-list-item-decorator" />
                        {!isNullOrUndefined(item) && !isNullOrUndefined(item.user) ? (
                            <QnaUserInfo
                                imgUrl={item.user.profile}
                                name={item.user.username}
                                className={isWrittenFromMeToo ? 'my-comment' : ''}
                            />
                        ) : (
                            <QnaUserInfo imgUrl="" name="아무개" />
                        )}
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
