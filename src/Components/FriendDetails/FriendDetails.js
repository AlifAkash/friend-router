import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {
    const { id } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    const {name, phone, email, username} = friend;

    return (
        <div>
            <h3>Name : {name}</h3>
            <p>UserName : {username}</p>
            <p>Email : {email}</p>
            <p>PhoneNO : {phone}</p>
        </div>
    );
};

export default FriendDetails;