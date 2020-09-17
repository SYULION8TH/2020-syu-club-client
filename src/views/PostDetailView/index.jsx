import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import './scss/PostDetailView.scss';
import ImgSlider from './imgSlider';
import PostDetailContent from './PostDetailContent';
import PostReplyList from './PostReplyList';
//TODO

const PostDetailView = (props) => {
    const [posts, setPosts] = useState([]);
    const [Replies, setReplies] = useState(0);
    
    const clubId = props.match.params.club_id;
    const postId = props.match.params.post_id;
    const getPosts = async () => {
        try {
            const result = await PostAPI.getPostDetail(clubId, postId);
            setPosts(result);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="post-detail-container">
            <div className="post-detail-img">
                <ImgSlider img={posts.post_img_url} />
            </div>
            <div className="post-detail-content-container">
                <PostDetailContent
                    date={moment(posts.created_at).format('YYYY.MM.DD')}
                    Replies={Replies}
                    Views = {posts.views}
                    title={posts.post_title}
                    content={posts.post_content}
                    club={posts.club_name}
                    img={posts.img}
                />
            </div>
            <div className="post-detail-reply-container">
                <PostReplyList postId={postId}/>
            </div>
        </div>
    );
};

export default PostDetailView;
