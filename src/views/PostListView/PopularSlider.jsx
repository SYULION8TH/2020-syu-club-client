import React, { useState, useEffect } from 'react';
import './scss/PopularSlider.scss';
import { PostAPI } from '../../api';
import { Link } from 'react-router-dom';
import { getPopularPosts } from '../../api/posts.api';
import reImg from '../../assets/img/post-replacement@2x.png';
import { isNullOrUndefined } from 'util';
import EllipsisText from 'react-ellipsis-text';

import SlidePostCard from './SlidePostCard';

const PopularSlider = () => {
    const [popPosts, setPopPosts] = useState([]);

    const fetchPopPost = async () => {
        try {
            const result = await PostAPI.getPopularPosts();
            setPopPosts([...result.results]);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchPopPost();
    }, []);

    if (!popPosts) {
        return null;
    }
    return (
        <>
            {/* <div className="popPost-slider-wrap"> */}
            <p className="popPost-sliderHeader">인기 동아리 포스팅</p>
            <div className="popPost-container">
                {popPosts.map((src) => (
                    <SlidePostCard
                        key={src.post_id}
                        title={src.post_title}
                        id={src.post_id}
                        img={src.post_img_url}
                        date={src.created_at}
                        club={src.club_name}
                        club_id={src.club}
                        views={src.views}
                        likes={src.likes}
                    />
                ))}
            </div>
            {/* </div> */}
        </>
    );
};

export default PopularSlider;
