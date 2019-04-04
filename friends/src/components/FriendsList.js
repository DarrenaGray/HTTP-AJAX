import React from 'react';
import { Link } from 'react-router-dom'



const FriendsList = props => {
    const { name, age, email, home, id } = props.friends;
    return (
        <div className="friendCardInfo">
            <Link to={`/friends/${id}`}>
                <h2>{name}</h2>
                <p><span>Age:</span> {age}</p>
                <p><span>Home:</span> {home}</p>
                <p><span>Email:</span> {email}</p>
            </Link>
        </div>
        
    )
}


export default FriendsList;