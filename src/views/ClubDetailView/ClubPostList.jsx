import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { PostAPI } from '../../api';
import { PostCard } from '../../components';
import { Link } from 'react-router-dom';

const ClubPostList = (props) => {
    const [posts, setPosts] = useState([]);

    const fetch = async () => {
        const response = await PostAPI.getPostsRelatedToClub(props.clubId, {
            limit: 10,
        });
        setPosts(response.results);
        // setPosts([]);
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="club-detail-posts-container">
            {posts.map((post, idx) => (
                <PostCard
                    key={idx}
                    title={post.post_title}
                    date={post.created_at}
                    imgUrl={post.post_img_url}
                    className="club-post-card"
                    linkUrl={`/club/${props.clubId}/post/${post.post_id}`}
                />
            ))}
            {posts.length <= 0 ? (
                <div className="club-detail-posts-empty">
                    <p>아직 작성된 글이 없습니다 </p>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

ClubPostList.propTypes = {
    clubId: PropTypes.string.isRequired,
};

export default ClubPostList;
