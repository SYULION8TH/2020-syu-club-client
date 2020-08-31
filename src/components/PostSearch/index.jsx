import React, { useState } from 'react';
import './postSearch.scss';
import { GoSearch } from 'react-icons/go';
import { BiX } from 'react-icons/bi';

//TODO
//props type정의하기
//usecallback쓸지말지 정하기
const PostSearch = (props) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onSearch = (e) => {
        props.setValues(value.split(' '));
        e.preventDefault(); //새로고침 방지
    };
    const onCancle = () => {
        props.setValues('');
        setValue('');
    };

    return (
        <div className="__search-wrapper">
            <p className="__search-text-top">{props.children}</p>
            <div className="__search-form-wrapper ">
                <input id="__search-input" value={value} onChange={onChange} />
                {props.values === '' ? (
                    <button type="button" id="__search-btn" onClick={onSearch}>
                        <GoSearch />
                    </button>
                ) : (
                    <button type="button" id="__search-btn" onClick={onCancle}>
                        <BiX />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PostSearch;
