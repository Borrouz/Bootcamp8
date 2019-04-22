import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="mainHeader">
            <button className='settings'></button>
            <h2>i`mfknfat</h2>
            <NavLink to="/newData"><button className='newWeight'>Add</button></NavLink>
        </div>
    );
};

export default Header;