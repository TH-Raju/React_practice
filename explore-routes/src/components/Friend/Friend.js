import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';

const Friend = ({ friend }) => {
    const { name, username, email, id } = friend;
    return (
        <div className="fnds">
            <h3>Name: {name}</h3>
            <h4>Email: {email}</h4>
            <p>UserName: <Link to={`friend/${id}`}>{username}</Link></p>

        </div>
    );
};

export default Friend;