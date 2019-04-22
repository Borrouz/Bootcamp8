import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div>
            <NavLink to='/main/history'><button className="menuBtn">IMT</button></NavLink>
            <NavLink to='/main'><button className="menuBtn">weight</button></NavLink>
        </div>
    );
};

export default Menu;