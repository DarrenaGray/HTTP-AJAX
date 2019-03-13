import React from 'react';



const FriendsList = props => {
    const { name, age, email } = props.friends;
    return (
        <div className="friendCardInfo">
            <h1>{name}</h1>
            <p><span>age:</span> {age}</p>
            <p><span>email:</span> {email}</p>
        </div>
        
    )
}


export default FriendsList;