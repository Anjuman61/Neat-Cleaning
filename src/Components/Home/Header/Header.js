import React from 'react';
import './Header.css';
import NavBar from '../../Shared/NavBar/NavBar';
import HeaderCover from '../HeaderCover/HeaderCover';


const Header = () => {
    return (
        <div className='header-container'>
           <NavBar></NavBar>
           <HeaderCover></HeaderCover>
        </div>
    );
};

export default Header;