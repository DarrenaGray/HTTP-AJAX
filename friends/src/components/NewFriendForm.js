import React from 'react'

 class FriendForm extends React.Component {
     state = {
       friend: {
         name: '',
         age: '',
         email: ''
       }
     }

     changeHandler = e => {
       // e.persist() allows the input value to change. Using e.preventDefault() returns a TypeError: Cannot read property 'name' of null
       e.persist();
       this.setState(prevState => ({
          friend: {
            ...prevState.friend,
            [e.target.name]: e.target.value
          }
       }))
     }
     
  render() {
    return (
      <div>
        <h1>Add New Friend</h1>
        <form>
            <input type="text" name="name" onChange={this.changeHandler} value={this.state.friend.name} placeholder="Name"/>
            <input type="number" name="age" onChange={this.changeHandler} value={this.state.friend.age} placeholder="Age"/>
            <input type="email" name="email" onChange={this.changeHandler} value={this.state.friend.email} placeholder="Email"/>
            <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;