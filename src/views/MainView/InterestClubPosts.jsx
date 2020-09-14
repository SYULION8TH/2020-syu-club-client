import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card, PostCard } from '../../components';
import { PostAPI } from '../../api/';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import './scss/interestClubPosts.scss';

const InterestClubPostsListItem = (props) => {
    const [posts, setPosts] = useState([]);
    const fetch = async () => {
        const response = await PostAPI.getPostsRelatedToClub(props.data.interest_club_id, {
            limit: 10,
        });
        setPosts(response.results);
    };

    useEffect(() => {
        fetch();
    }, [props.data]);
    return (
        <div className="interest-club-list-item">
            <div className="interest-club-list-item-header-container">
                <p className="interest-club-list-item-header">{props.data.club.club_name}</p>
                <Link
                    className="interest-club-list-item-header-link"
                    to={`/club/${props.data.club.club_id}/post`}
                >
                    전체 보기
                </Link>
            </div>
            <div className="interest-club-list-item-posts-container">
                {posts.map((item, key) => (
                    <PostCard key={key} title={item.post_title} />
                ))}
            </div>
        </div>
    );
};

const InterestClubPosts = () => {
    const { data } = useSelector((state) => state.user.info);

    return (
        <Card title="관심 동아리 포스트">
            <div className="interest-club-list">
                {data !== undefined && data !== null ? (
                    data.user.interest_club.map((item, idx) => (
                        <InterestClubPostsListItem data={item} key={idx} />
                    ))
                ) : (
                    <></>
                )}
            </div>
        </Card>
    );
};

export default InterestClubPosts;
