import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Friend.css";

const Friend = (props) => {
    const {name, email, id} = props.friend;

    const history = useHistory();

    const handleClick = (id) => {
        const url = `/friend/${id}`;
        history.push(url);
    }

    return (
        <div className="friend">
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <Link to={`/friend/${id}`}>Show detail of {id}</Link>
            <br/>
            <button onClick={() => handleClick(id)}>Click to Details</button>
        </div>
    );
};

export default Friend;