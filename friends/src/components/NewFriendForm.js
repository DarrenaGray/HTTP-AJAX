import React from 'react'

 class FriendForm extends React.Component {
     state = {
       friend:{
         name: '',
         age: '',
         email: ''
       }
     };


     changeHandler = e => {
       // e.persist() allows the input value to change. Using e.preventDefault() or using no e.persist() returns a TypeError: Cannot read property 'name' of null
       e.persist();
       this.setState(prevState => ({
          friend: {
            ...prevState.friend,
            [e.target.name]: e.target.value
          }
       }));
     }


     handleSubmit = e => {
       this.props.addNewFriend(e, this.state.friend);
       this.setState({
         friend: {
          name: '',
          age: '',
          email: ''
         }
       })
       this.props.history.push('/friends')
     }
     
  render() {
    return (
      <div>
        <h1>Add New Friend</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.changeHandler} value={this.state.friend.name} placeholder="Name" required/>
            <input type="number" name="age" onChange={this.changeHandler} value={this.state.friend.age} placeholder="Age"required/>
            <input type="email" name="email" onChange={this.changeHandler} value={this.state.friend.email} placeholder="Email" required/>
            <button type="submit">Add Friend</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;