import React, { useState, useEffect } from 'react';
import './scss/PopularSlider.scss';
import { PostAPI } from '../../api';

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
        </>
    );
};

export default PopularSlider;
