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
    <div>
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={updateFriend}>Update</button>
        {/* delete button works but error returns due to issues with array not populating on page refresh */}
        <button onClick={deleteFriend}>Delete</button>
    </div>
  )
}








export default Friend;