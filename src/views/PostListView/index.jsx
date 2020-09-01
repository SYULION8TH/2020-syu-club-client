import React, { useState, useEffect,useRef } from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import { Navbar } from '../../components';
import PostSearch from '../../components/PostSearch';
import PostCard from './PostCard';
import PopularSlider from './PopularSlider';

import './scss/PostListView.scss';

//TODO
//1. 인피니티스크롤
//2. 대체이미지 삽입
const PostListView = () => {
    const[posts, setPosts] = useState([]);
    const[values, setValues] = useState('');

    //포스트 리스트 붙이기
    const fetchPost = async ()=>{
        try{
            const result = await PostAPI.getPosts(values); 
            setPosts([...result]); 
            
            console.log(posts);
              
        } catch(e){
            console.log(e);
        }
    };
    useEffect(()=>{
        
        fetchPost();
    },[values]);
    // // 스크롤 이벤트 핸들러
    // const handleScroll = () => {
    //     const scrollHeight = document.documentElement.scrollHeight;
    //     const scrollTop = document.documentElement.scrollTop;
    //     const clientHeight = document.documentElement.clientHeight;
    //     console.log("scroll");
    //     if (scrollTop + clientHeight === scrollHeight) {
    //         fetchPost();
    //     }
    // };
    // useEffect(() => {
    //     // scroll event listener 등록
    //     window.addEventListener("scroll", handleScroll, true);
    //     return () => {
    //       // scroll event listener 해제
    //       window.removeEventListener("scroll", handleScroll);
    //     };
    //   });
    if(!posts) {
        return null;
    }
    
    return (
        <div className="post-list-main-container">
            <Navbar />
            <div className="bg-container">
                <div className="search-container">
                    <PostSearch setValues = {setValues} values={values}>동아리 포스팅</PostSearch>
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
                        id={post.post_id}
                        img={post.post_img_url}
                        date={moment(post.created_at).format('YYYY.MM.DD')}
                        club={post.club_name}
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    );
};

export default PostListView;
