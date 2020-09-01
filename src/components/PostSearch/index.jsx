import React, { useState } from 'react';
import './postSearch.scss';
import { GoSearch } from 'react-icons/go';
import { BiX } from 'react-icons/bi';


const PostSearch = (props) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };
    const onSearch = (e) => {
        props.setValues(value.split(' '));
        e.preventDefault(); //새로고침 방지
    };
    const onCancel = () => {
        props.setValues('');
        setValue('');
    };

    return (
        <div className="__search-wrapper">
            {/* 검색창 위 텍스트를 children으로 받아 수정합니다. */}
            <p className="__search-text-top">{props.children}</p>
            <div className="__search-form-wrapper ">
                {/* props.values값의 유무에 따라 버튼의 모양과 함수가 바뀐다. */}
                <input id="__search-input" value={value} onChange={onChange} />
                {props.values === '' ? (
                    <button type="button" id="__search-btn" onClick={onSearch}>
                        <GoSearch />
                    </button>
                ) : (
                    <button type="button" id="__search-btn" onClick={onCancel}>
                        <BiX />
                    </button>
                )}
            </div>
        </div>
    );
};

export default PostSearch;
