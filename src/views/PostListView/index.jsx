import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import { Navbar } from '../../components';
import PostSearch from '../../components/PostSearch';
import PostCard from './PostCard';
import PopularSlider from './PopularSlider';

import './scss/PostListView.scss';


const PostListView = () => {
    const[posts, setPosts] = useState([]);

    const fetchPost = async ()=>{
        try{
            const result = await PostAPI.getPosts(); 
            setPosts([...result]);
            console.log(result);//1번
            //2번
        } catch(e){
            console.log(e);
        }

    };

    useEffect(()=>{
        fetchPost();
        console.log(posts);
    },[]);

    if(!posts) {
        return null;
    }

    return (
        <div className="post-list-main-container">
            <Navbar />
            <div className="bg-container">
                <div className="search-container">
                    <PostSearch>동아리 포스팅</PostSearch>
                </div>
            </div>           
            <PopularSlider/>
            <div className="post-list-container">
                <div className="post-list">
                    <p className="post-list-head">전체 포스팅</p>
                    {posts.map(post =>(
                        <PostCard
                        key={post.post_id}
                        title={post.post_title}
                        
                        // img={post.post_img_url}
                        date={moment(post.created_at).format('YYYY.MM.DD')}
                        club="likelion"
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default PostListView;
