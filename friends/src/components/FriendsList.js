import React from 'react';

const FriendsList = props => {
    const { name, age, email } = props.friends;
    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}


export default FriendsList;