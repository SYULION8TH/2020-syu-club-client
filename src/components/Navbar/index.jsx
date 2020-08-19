import React, { useState } from 'react';
import './Navbar.scss';
import AnimatedMenuIcon from './AnimatedMenuIcon';

export const Navbar = (props) => {
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className={`navbar-container`}>
            <AnimatedMenuIcon isOpened={menuOpened} setIsOpened={(v) => setMenuOpened(v)} />
            <div className={`navbar-content-container ${menuOpened ? 'active' : ''}`}>
                <p>Jello</p>
            </div>
        </div>
    );
};
