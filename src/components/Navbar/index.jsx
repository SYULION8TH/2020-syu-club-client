import React, { useState } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

import CircleFramedImage from '../CircleFramedImage';
import SideMenu from './SideMenu';

export const Navbar = (props) => {
    const [menuOpened, setMenuOpened] = useState(true);
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <SideMenu isOpened={menuOpened} />
        </div>
    );
};
