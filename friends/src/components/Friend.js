import React from 'react'


const Friend = props => {
  console.log(props.friends);
  const friend = props.friends.find(friend => {
    console.log(friend, props.match.params.id);
    return `${friend.id}` === props.match.params.id;
  })
  return (
    <div>
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button>Update</button>
        <button onClick={e => props.deleteFriend(e, friend.id)}>Delete</button>
    </div>
  )
}








export default Friend;