import React, { useEffect, useState } from 'react';
import './scss/SearchForm.scss';
import { GoSearch } from 'react-icons/go';
import { RiArrowUpSLine } from 'react-icons/ri';

const SearchForm = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 1000);
    }, []);

    return (
        <div className={`search-form-container ${loaded ? 'loaded' : ''}`}>
            <div class="search-form-wrapper ">
                <input id="search-input" />
                <button type="button" id="search-btn">
                    <GoSearch />
                </button>
            </div>
            <p id="search-help-text">동아리에 대해 검색해보세요</p>
            <div className="guide-container">
                <span class="guide-arrow">
                    <RiArrowUpSLine />
                </span>
                <p class="guide-text">탭해서 자세히 보기</p>
            </div>
        </div>
    );
};

export default SearchForm;
