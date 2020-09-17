import React, { useState } from 'react';
import './postSearch.scss';
import { GoSearch } from 'react-icons/go';
import { BiX } from 'react-icons/bi';
import PropTypes from 'prop-types';

//TODO
//props type정의하기
//usecallback쓸지말지 정하기
const PostSearch = (props) => {
    
    return (
        <div className="__search-wrapper">
            {/* 검색창 위 텍스트를 children으로 받아 수정합니다. */}
            <p className="__search-text-top">{props.children}</p>
            <div className="__search-form-wrapper ">
                <input
                    id="__search-input"
                    type="text"
                    placeholder="검색어를 입력해주세요"
                    value={props.keyword}
                    onChange={(e) => props.setKeyword(e.target.value)}
                />
                <button id="__search-btn" type="button" onClick={props.search}>
                    {props.isSearched ? <BiX /> : <GoSearch />}
                </button>
                
            </div>
        </div>
    );
};

// PostSearch.propTypes = {
//     values: PropTypes.oneOf([PropTypes.string.isRequired, PropTypes.array.isRequired]),
//     setValues: PropTypes.func.isRequired,
// };

export default PostSearch;
