import React from 'react';

import CircleFramedImage from '../../components/CircleFramedImage';
import { AiOutlineEye } from 'react-icons/ai';
import { MdChatBubbleOutline } from 'react-icons/md';
import './scss/PostDetailContent.scss';
//TODO
//api에 club_img추가
const PostDetailContent = (props) => {
    return (
        <>
            <div className="post-detail-content-header">
                <div className="post-detail-club-info">
                    <CircleFramedImage
                        imgUrl={props.imgUrl}
                        width={20}
                        height={20}
                        imgAlt="사용자 프로필 이미지"
                    />
                    <p className="post-detail-club-info-name">{props.club}</p>
                </div>
                <div className="post-detail-header-title">{props.title}</div>
                <div className="post-detail-header-sub">
                    <p className="post-detail-view-sub-left">{props.date}</p>
                    <span className="post-detail-view-sub-right">
                        <MdChatBubbleOutline /> {props.Replies}
                    </span>
                    <span className="post-detail-view-sub-right">
                        <AiOutlineEye /> {props.Views}
                    </span>
                </div>
            </div>
            <div className="post-detail-content-main">
                <p className="post-detail-content-text">{props.content}</p>
            </div>
        </>
    );
};

export default PostDetailContent;
