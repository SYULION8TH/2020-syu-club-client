import React, { useState, useEffect} from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import PostSearch from '../../components/PostSearch';
import PostCard from '../PostListView/PostCard';

import '../PostListView/scss/PostListView.scss';
//TODO
//api 파라미터 조정
const PostInClubView = (props) => {
    const clubId = props.match.params.club_id;
    const[posts, setPosts] = useState([]);
    const[values, setValues] = useState('');
    const fetchPost = async ()=>{
        try{
            const result = await PostAPI.getPostsRelatedToClub(clubId,values); 
            setPosts([...result]); 
            
            console.log(posts);
              
        } catch(e){
            console.log(e);
        }
    };
    useEffect(()=>{
        
        fetchPost();
    },[values]);
    return (
            <div className="post-list-main-container">
            <div className="bg-container">
                <div className="search-container">
                    <PostSearch setValues = {setValues} values={values}>동아리 포스팅</PostSearch>
                </div>
            </div>
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

export default PostInClubView;