import React, { useState } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

import SideMenu from './SideMenu';

export const Navbar = (props) => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <SideMenu isOpened={menuOpened} />
            <div className={`navbar-container-cover ${menuOpened ? 'active' : ''}`}></div>
        </div>
    );
};
