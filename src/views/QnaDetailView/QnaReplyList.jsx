/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { QnaAPI } from '../../api';
import { useSelector } from 'react-redux';
import { isNullOrUndefined } from 'core-util-is';

import QnaReplyListItem from './QnaReplyListItem';

const QnaReplyList = (props) => {
    const [replies, setReplies] = useState([]);
    const [replyContent, setReplyContent] = useState('');
    const [selectedComment, setSelectedComment] = useState(null);

    const { info } = useSelector((state) => state.user);

    const fn = {
        fetch: async () => {
            const result = await QnaAPI.getQNAReplies(props.qnaId);
            setReplies(result);
        },
        post: async () => {
            if (!isNullOrUndefined(info.data)) {
                try {
                    let options = {};
                    options.qna_reply_content = replyContent;
                    options.is_secret = 0;
                    if (!isNullOrUndefined(selectedComment)) {
                        options.parent_reply = selectedComment.qna_reply_id;
                    }
                    await QnaAPI.postQNAReply(props.qnaId, options);

                    // 등록 완료
                    await fn.fetch();

                    setReplyContent('');
                    setSelectedComment(null);
                } catch (e) {
                    alert(e.message);
                }
            } else {
                alert('로그인이 필요합니다');
            }
        },
    };

    useEffect(() => {
        fn.fetch();
    }, [props.qnaId]);

    useEffect(() => {
        let count = 0;
        replies.forEach((reply) => {
            count++;
            reply.reply.forEach((children) => {
                count++;
            });
        });
        props.onCount(count);
    }, [replies]);

    return (
        <div className="qna-detail-reply-list-container">
            <div className="qna-detail-reply-list-wrapper">
                <p className="qna-detail-reply-list-title">댓글</p>
                <div className="qna-detail-reply-list-items-container">
                    {replies.map((item, idx) => {
                        return (
                            <QnaReplyListItem
                                key={idx}
                                data={item}
                                onSelected={setSelectedComment}
                            />
                        );
                    })}

                    {replies.length <= 0 ? (
                        <div className="qna-detail-reply-list-items-empty">
                            <p>아직 등록된 댓글이 없습니다</p>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
            <div className="qna-detail-reply-list-add-form">
                <div className="qna-detail-reply-list-add-form-wrapper">
                    <div className="qna-detail-reply-input-wrapper">
                        {isNullOrUndefined(selectedComment) ? (
                            <></>
                        ) : (
                            <p id="__reply-comment-user-name">@{selectedComment.user.username}</p>
                        )}
                        <input
                            type="text"
                            id="__reply-content"
                            placeholder={
                                isNullOrUndefined(info.data)
                                    ? '로그인 해주세요'
                                    : '댓글을 입력해주세요'
                            }
                            disabled={isNullOrUndefined(info.data)}
                            value={replyContent}
                            onChange={(event) => setReplyContent(event.target.value)}
                        />
                    </div>
                    <button type="button" id="__reply-submit-btn" onClick={fn.post}>
                        등록
                    </button>
                    {isNullOrUndefined(selectedComment) ? (
                        <></>
                    ) : (
                        <button
                            type="button"
                            id="__reply-cancel-btn"
                            onClick={() => setSelectedComment(null)}
                        >
                            취소
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QnaReplyList;
