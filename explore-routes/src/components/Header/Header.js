import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <Button variant='primary'>Bootstrap</Button>
                <Link to='/home'><Button variant='primary'>Home</Button> </Link>
                <Link to='/friends'><Button variant='primary'>Friends</Button></Link>
                <Link to='/product'> <Button variant='primary'>Product</Button></Link>
                <Link to='/about'><Button variant='primary'>About</Button></Link>
            </nav>
        </div>
    );
};

export default Header;