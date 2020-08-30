import React from 'react';
import {Link} from 'react-router-dom';
import PostDetailView from '../PostDetailView'
import './scss/PostCard.scss';

//TODO
//props type 정의하기
//링크 수정
//게시글 수 제한하기
const PostCard = (props) => {
    return (
        <Link to={`/post/${props.id}`}>
            <div className="post-card-wrapper">
                <div className="post-card-img">
                    <img
                        src={props.img}
                        alt={`${props.title} 이미지`}
                    />
                </div>
                <div className="post-card-content">
                    <p className="post-card-title">{props.title}</p>
                    <p className="post-card-club">{props.club}</p>
                    <p className="post-card-date">
                        {props.date}
                    </p>
                </div>
            </div>
        </Link>
        
    );
};

export default PostCard;