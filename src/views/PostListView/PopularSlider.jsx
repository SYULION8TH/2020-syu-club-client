import React, {useState, useEffect} from 'react';
import './scss/PopularSlider.scss'
import { PostAPI } from '../../api';
import {Link} from 'react-router-dom';
import { getPopularPosts } from '../../api/posts.api';

const PopularSlider = () => {
    const[popPosts, setPopPosts] = useState([]);

    const fetchPopPost = async ()=>{
        try{
            const result = await PostAPI.getPopularPosts(); 
            setPopPosts([...result.results]);
            console.log(result);
        } catch(e){
            console.log(e);
        }

    };

    useEffect(()=>{
        fetchPopPost();
        console.log(popPosts);
    },[]);

    if(!popPosts) {
        return null;
    }
    return (
        
            <div className="popPost-slider-wrap">
                <p className="popPost-sliderHeader">
                    인기 동아리 포스팅
                </p>
                <div className="popPost-container">
                    
                    {popPosts.map(src=>(
                        <Link to={`/post/${src.post_id}`} key={src.post_id}>
                            <div
                            key={src.post_id}
                            className="popPost-card"
                            style={{
                            backgroundImage: `url(${src.post_img_url})`,
                            backgroundColor: "white"
                            }}>
                                <p className="popPost-title">{src.post_title}</p>
                                <p className="popPost-club">{src.club}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
    
    );
};

export default PopularSlider;