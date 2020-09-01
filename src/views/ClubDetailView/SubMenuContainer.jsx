import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SubMenuContainer = (props) => {
    return (
        <div className="club-detail-contents-container">
            <div className="club-detail-contents-header">
                <p className="club-detail-contents-title">{props.title}</p>
                <Link className="club-detail-contents-link" to={props.linkUrl}>
                    전체 보기
                </Link>
            </div>
            <div className="club-detail-contents-wrapper">{props.children}</div>
        </div>
    );
};

SubMenuContainer.propTypes = {
    title: PropTypes.string.isRequired,
    linkUrl: PropTypes.string.isRequired,
};

export default SubMenuContainer;
