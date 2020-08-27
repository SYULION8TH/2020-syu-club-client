import React from 'react';
import {Link} from 'react-router-dom';

import './scss/PostCard.scss';

//TODO
//props type 정의하기
//Link 수정하기
const PostCard = (props) => {
    return (
        <Link to="/post/1">
            <div className="post-card-wrapper">
                <div className="post-card-img" style={{backgroundColor: "#904e87"}}>
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