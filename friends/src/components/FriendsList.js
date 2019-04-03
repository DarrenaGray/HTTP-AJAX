import React from 'react';
import { Link } from 'react-router-dom'



const FriendsList = props => {
    const { name, age, email, id } = props.friends;
    return (
        <div className="friendCardInfo">
            <Link to={`/friends/${id}`}>
                <h1>{name}</h1>
                <p><span>age:</span> {age}</p>
                <p><span>email:</span> {email}</p>
            </Link>
        </div>
        
    )
}


export default FriendsList;