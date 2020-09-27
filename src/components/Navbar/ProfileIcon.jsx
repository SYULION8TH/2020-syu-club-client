import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/img/user.png';

const ProfileIcon = (props) => {
    console.log(user)
    return (
        <Link to="/login">
            <img src={user} alt = "기본 프로필 이미지" width="30" height="30" style={{margin:"10px"}}/>
        </Link>
    );
}

export default ProfileIcon;