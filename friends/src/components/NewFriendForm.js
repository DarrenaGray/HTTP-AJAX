import React from 'react'

 class FriendForm extends React.Component {
     
     
  render() {
    return (
      <div>
        <h1>Add New Friend</h1>
        <form>
            <input type="text" name="name"  placeholder="Name"/>
            <input type="number" name="age"  placeholder="Age"/>
            <input type="email" name="email"  placeholder="Email"/>
            <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;