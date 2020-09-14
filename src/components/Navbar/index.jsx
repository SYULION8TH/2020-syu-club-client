import React, { useState } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

import SideMenu from './SideMenu';

import { useHistory } from 'react-router';

export const Navbar = (props) => {
    const history = useHistory();
    const [menuOpened, setMenuOpened] = useState(false);
    history.listen(() => {
        setMenuOpened(false);
    });
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <SideMenu isOpened={menuOpened} />
            <div className={`navbar-container-cover ${menuOpened ? 'active' : ''}`}></div>
        </div>
    );
};
