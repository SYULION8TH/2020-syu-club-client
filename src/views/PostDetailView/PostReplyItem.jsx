/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import { isNullOrUndefined } from 'util';
import QnaUserInfo from '../QnaDetailView/QnaUserInfo';
import './scss/PostReplyList.scss';
import { useSelector } from 'react-redux';
import { GoReply } from 'react-icons/go';
import { BsArrowReturnRight } from 'react-icons/bs';
const PostReplyItem = (props) => {
    const { info } = useSelector((state) => state.user);
    const [isWrittenFromMe, setIsWrittenFromMe] = useState(false);

    useEffect(() => {
        if (!isNullOrUndefined(info.data) && !isNullOrUndefined(props.data.user)) {
            setIsWrittenFromMe(info.data.user.id === props.data.user.id);
        }
    }, [info.data]);
    return (
        <div className="post-detail-reply-item-wrap">
            <div className="post-detail-reply-item">
                <div className="post-detail-reply-item-user">
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

                <p className="post-detail-reply-item-content">{props.data.post_reply_content}</p>
                <p className="post-detail-reply-item-date">{props.date}</p>
            </div>
            {props.data.reply.map((item, idx) => {
                let isWrittenFromMeToo = false;
                if (!isNullOrUndefined(info.data) && !isNullOrUndefined(item.user)) {
                    isWrittenFromMeToo = info.data.user.id === item.user.id;
                }

                return (
                    <div key={idx} className="post-detail-reply-item">
                        <BsArrowReturnRight className="post-detail-reply-list-item-decorator" />
                        {!isNullOrUndefined(item) && !isNullOrUndefined(item.user) ? (
                            <QnaUserInfo
                                imgUrl={item.user.profile}
                                name={item.user.username}
                                className={isWrittenFromMeToo ? 'my-comment' : ''}
                            />
                        ) : (
                            <QnaUserInfo imgUrl="" name="아무개" />
                        )}
                        <p className="post-detail-reply-item-content">{item.post_reply_content}</p>
                        <p className="post-detail-reply-item-date">
                            {moment(item.created_at).format('YYYY.MM.DD')}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default PostReplyItem;
