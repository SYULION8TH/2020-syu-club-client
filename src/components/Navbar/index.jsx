import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

import CircleFramedImage from '../CircleFramedImage';
import SideMenu from './SideMenu';
import { useSelector, useDispatch } from 'react-redux';
import { getUserInfo } from '../../modules/User';
import { isNullOrUndefined } from 'util';

export const Navbar = (props) => {
    

    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <SideMenu isOpened={menuOpened} />
        </div>
    );
};
