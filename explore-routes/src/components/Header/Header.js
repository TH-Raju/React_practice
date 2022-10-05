import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Link to='/home'>Home</Link>
                <Link to='/friends'>Friends</Link>
                <Link to='/product'>Product</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    );
};

export default Header;