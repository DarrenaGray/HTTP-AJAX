import React from 'react'

//issues with array not repopulating on page refresh. returns an undefined error - TypeError: Cannot read property 'name' of undefined

const Friend = props => {
  const id = props.match.params.id
  const friend = props.friends.find(friend => {
    console.log(friend, id);
    return `${friend.id}` === id;
  })
  return (
    <div>
        <h3>{friend.name}</h3>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={e => props.setUpdateForm(e, friend)}>Update</button>
        {/* delete button works but error returns due to issues with array not populating on page refresh */}
        <button onClick={e => props.deleteFriend(e, friend.id)}>Delete</button>
    </div>
  )
}








export default Friend;