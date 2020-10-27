import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import PostSearch from '../../components/PostSearch';
import PostCard from '../PostListView/PostCard';
import * as Tools from '../../lib/tools';

import '../PostListView/scss/PostListView.scss';
//TODO
//api 파라미터 조정
const PostInClubView = (props) => {
    const clubId = props.match.params.club_id;
    const [posts, setPosts] = useState([]);
    const [isSearched, setIsSearched] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [nextUrl, setNextUrl] = useState(null);

    const fetchPost = async (options) => {
        try {
            const response = await PostAPI.getPostsRelatedToClub(clubId, {
                ...options,
            });
            setPosts([...response.results]);
            setNextUrl(response.next);
        } catch (e) {
            console.log(e);
        }
    };

    const search = async () => {
        if (isSearched) {
            // 이미 검색중인 경우 검색을 풀고
            await setIsSearched(false);
            // 검색어를 지우고
            await setKeyword('');
            // 검색을 초기화
            await fetchPost({
                search: '',
            });
        } else {
            await setIsSearched(true);
            await fetchPost({
                search: keyword,
            });
        }
    };

    const loadMore = async () => {
        if (nextUrl) {
            const queries = Tools.getQueriesFromURL(nextUrl);
            await fetchPost({
                ...queries,
                search: keyword,
            });
        }
    };
    useEffect(() => {
        fetchPost();
    }, []);
    return (
        <div
            className="post-list-main-container"
            onScroll={(event) => {
                if (
                    event.target.offsetHeight + event.target.scrollTop >=
                    event.target.scrollHeight
                ) {
                    loadMore();
                }
            }}
        >
            <div className="bg-container">
                <div className="search-container">
                    <PostSearch
                        search={search}
                        isSearched={isSearched}
                        setKeyword={setKeyword}
                        keyword={keyword}
                    >
                        동아리 포스팅
                    </PostSearch>
                </div>
            </div>
            <div className="post-list-container">
                <div className="post-list">
                    <p className="post-list-head">전체 포스팅</p>
                    {posts.map((post) => (
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
