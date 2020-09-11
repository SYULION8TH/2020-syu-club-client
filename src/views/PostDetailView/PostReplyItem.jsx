/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { PostAPI } from '../../api';
import { isNullOrUndefined } from 'util';
import './scss/PostReplyList.scss';
const PostReplyItem = (props) => {
    return (
        <>
            <div className="post-detail-reply-item">
                <p className="post-detail-reply-item-content">{props.content}</p>
                <p className="post-detail-reply-item-date">{props.date}</p>
            </div>
        </>
    );
};

export default PostReplyItem;
