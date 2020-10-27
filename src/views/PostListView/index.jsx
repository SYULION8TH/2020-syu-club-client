import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { PostAPI } from '../../api';
import PostSearch from '../../components/PostSearch';
// import PostCard from './PostCard';
// import PostCard from '../../components/PostCard';
import WidePostCard from '../../components/WidePostCard';
import PopularSlider from './PopularSlider';
import { isNullOrUndefined } from 'util';
import * as LibTools from '../../lib/tools';
import './scss/PostListView.scss';

const PostListView = (props) => {
    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [isSearched, setIsSearched] = useState(false);
    const [nextURL, setNextURL] = useState(null);
    //포스트 리스트 붙이기
    const post = {
        fetch: async (params, needToAppend = false) => {
            let options = {
                limit: 10,
            };
            const response = await PostAPI.getPosts({
                ...options,
                ...params,
            });
            setNextURL(response.next);
            if (needToAppend) {
                setPosts([...posts, ...response.results]);
            } else {
                setPosts(response.results);
            }
        },
        ui: {
            search: () => {
                if (isSearched) {
                    // 검색상태인 경우

                    setKeyword('');
                    setIsSearched(false);
                    post.fetch({
                        post_title__contains: '',
                    });
                } else {
                    // 검색 상태가 아닌 경우

                    if (keyword.trim() !== '') {
                        setIsSearched(true);
                        post.fetch({
                            post_title__contains: keyword,
                        });
                    } else {
                        alert('검색어를 입력해주세요');
                    }
                }
            },
            onScroll: (event) => {
                if (
                    event.target.className === 'post-list-main-container' &&
                    event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight
                ) {
                    if (!isNullOrUndefined(nextURL)) {
                        const _queries = LibTools.getQueriesFromURL(nextURL);
                        post.fetch(
                            {
                                ..._queries,
                                post_title__contains: keyword,
                            },
                            true,
                        );
                    }
                }
            },
        },
    };
    useEffect(() => {
        post.fetch().then(post.fetch);
    }, [props.match]);

    return (
        <div className="post-list-main-container" onScroll={post.ui.onScroll}>
            <div className="bg-container">
                <div className="search-container">
                    <PostSearch
                        isSearched={isSearched}
                        keyword={keyword}
                        setKeyword={setKeyword}
                        search={post.ui.search}
                    >
                        동아리 포스팅
                    </PostSearch>
                </div>
            </div>
            <div className="popPost-slider-wrap">
                <PopularSlider />
            </div>

            <div className="post-list-container">
                <div className="post-list">
                    <p className="post-list-head">전체 포스팅</p>
                    {posts.length >= 0 ? (
                        posts.map((post) => {
                            return (
                                <WidePostCard
                                    key={post.post_id}
                                    title={post.post_title}
                                    id={post.post_id}
                                    img={post.post_img_url}
                                    date={post.created_at}
                                    club={post.club_name}
                                    club_id={post.club}
                                    views={post.views}
                                    likes={post.likes}
                                />
                            );
                        })
                    ) : (
                        <p className="post-list-view-content-placeholder">등록된 질문이 없습니다</p>
                    )}
                </div>
            </div>
        </div>
    );
};
// PostListView.defaultProps = {
//     img: 'post-replacement.png'
// };
export default PostListView;
