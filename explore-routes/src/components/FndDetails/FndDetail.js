import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FndDetail = () => {
    const FndDetail = useLoaderData();
    const { name, email, phone, username } = FndDetail;
    return (
        <div>
            <h3>Detail About {name}</h3>
            <h4>Name: {username}</h4>
            <p>Phone: {phone}</p>
            <span>Email: {email}</span>
        </div>
    );
};

export default FndDetail;