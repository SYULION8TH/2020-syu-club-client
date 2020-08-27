import React from 'react';
import './postSearch.scss';
import { GoSearch } from 'react-icons/go';

//TODO
//props type정의하기
const PostSearch = (props) => {
    

    return (
        <div className="__search-wrapper">
            <p className="__search-text-top">{props.children}</p>
            <div className="__search-form-wrapper ">
                <input id="__search-input" />
                <button type="button" id="__search-btn">
                    <GoSearch />
                </button>
            </div>
        </div>
           
      
    );
};

export default PostSearch;
