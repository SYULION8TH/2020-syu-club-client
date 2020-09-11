/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { PostAPI } from '../../api';
import { isNullOrUndefined } from 'util';
import './scss/PostReplyList.scss';
import PostReplyItem from './PostReplyItem';

//댓글 이름띄우기
const PostReplyList = (props) => {
    const [replies, setReplies] = useState([]);
    const [replyContent, setReplyContent] = useState('');
    const [selectedComment, setSelectedComment] = useState(null);

    // const { info } = useSelector((state) => state.user);

    const fn = {
        fetch: async () => {
            const result = await PostAPI.getPostReplies(props.postId);
            setReplies(result);
        }
        // post: async () => {
        //     if (!isNullOrUndefined(info.data)) {
        //         try {
        //             let options = {};
        //             options.post_reply_content = replyContent;
        //             if (!isNullOrUndefined(selectedComment)) {
        //                 options.parent_reply = selectedComment.post_reply_id;
        //             }
        //             await PostAPI.postReply(props.postId, options);

        //             // 등록 완료
        //             await fn.fetch();

        //             setReplyContent('');
        //             setSelectedComment(null);
        //         } catch (e) {
        //             alert(e.message);
        //         }
        //     } else {
        //         alert('로그인이 필요합니다');
        //     }
        // },
    };

    useEffect(() => {
        fn.fetch();
        console.log(replies);
    }, [props.postId]);

    // useEffect(() => {
    //     let count = 0;
    //     replies.forEach((reply) => {
    //         count++;
    //         reply.reply.forEach((children) => {
    //             count++;
    //         });
    //     });
    //     props.onCount(count);
    // }, [replies]);

    return (
        <>
            <div className="post-detail-reply-wrap">
                <div className="post-detail-reply-header">댓글</div>
                <div className="post-detail-reply-main">
                    {replies.length <= 0 ? (
                        <div className="post-detail-reply-list-items-empty">
                            <p>아직 등록된 댓글이 없습니다</p>
                        </div>
                    ) : (
                        <div className="post-detail-reply-items-container">
                            {replies.map((reply) => (
                                <PostReplyItem
                                    key={reply.post_reply_id}
                                    content={reply.post_reply_content}
                                    date={reply.created_at}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="post-detail-reply-add-form">
                <div className="post-detail-reply-add-form-wrapper">
                    <div className="post-detail-reply-input-wrapper">
                        {isNullOrUndefined(selectedComment) ? (
                            <></>
                        ) : (
                            <p id="__reply-comment-user-name">@{selectedComment.user.username}</p>
                        )}
                        <input
                            type="text"
                            id="__reply-content"
                            // placeholder={
                            //     isNullOrUndefined(info.data)
                            //         ? '로그인 해주세요'
                            //         : '댓글을 입력해주세요'
                            // }
                            // disabled={isNullOrUndefined(info.data)}
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
        </>
    );
};

export default PostReplyList;
