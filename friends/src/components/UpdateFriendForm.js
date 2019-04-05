import React from 'react'
import { Link } from 'react-router-dom';

 class UpdateFriendForm extends React.Component {
     state = {
       friend: this.props.activeFriend
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
       e.preventDefault();
       this.props.updateFriend(this.state.friend);
     }
     
  render() {
    return (
      <div className="updateForm">
        <h1>Update Friend</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" onChange={this.changeHandler} value={this.state.friend.name} placeholder="Name" required/>
            <input type="number" name="age" onChange={this.changeHandler} value={this.state.friend.age} placeholder="Age"required/>
            <input type="text" name="home" onChange={this.changeHandler} value={this.state.friend.home} placeholder="Hometown" required/>
            <input type="email" name="email" onChange={this.changeHandler} value={this.state.friend.email} placeholder="Email" required/>
            <button type="submit">Update Friend</button>
            <Link to={`/friends/${this.state.friend.id}`}><button type="click">Cancel</button></Link>
        </form>
      </div>
    )
  }
}

export default UpdateFriendForm;