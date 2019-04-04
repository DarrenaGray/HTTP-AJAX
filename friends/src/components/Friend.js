import React from 'react'

//issues with array not repopulating on page refresh. returns an undefined error - TypeError: Cannot read property 'name' of undefined

const Friend = props => {
  console.log(props.friends)
  const id = props.match.params.id
  const friend = props.friends.find(friend => {
    return `${friend.id}` === id;
  });

  const updateFriend = e => {
    e.preventDefault();
    props.setActiveFriend(friend);
    props.history.push('/update-friend');
  }

  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(friend);
    props.history.push('/friends')
  }

  return (
    <div className="friend">
        <h2>{friend.name}</h2>
        <p><span>Age:</span> {friend.age}</p>
        <p><span>Home:</span> {friend.home}</p>
        <p><span>Email:</span> {friend.email}</p>
        <button onClick={updateFriend}>Update</button>
        <button onClick={deleteFriend}>Delete</button>
    </div>
  )
}








export default Friend;