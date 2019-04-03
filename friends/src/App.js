import React from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import FriendForm from './components/NewFriendForm';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state= {
      friends: []
    };
  }

  componentDidMount() {
    console.log('CDM');
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err, 'Server Error');
      });
  }

  addNewFriend = (e, friend) => {
    console.log('friends check', friend)
    e.preventDefault();
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        console.log(res)
        this.setState(({
          friends: res.data
        }));
        // this.props.history.push('/friends')
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = (id, updatedFriend) => {
    console.log('update check', updatedFriend)
    axios
      .put(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })

  }

  deleteFriend = (e, id) => {
    console.log('delete check', id)
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log(res)
        this.setState({
          friends: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }



  render() {
    console.log('Rendering', this.state.friends);
    return (
      <div className="App">
        <ul className="navBar">
          <li><NavLink to="/" className="activeNav">Home</NavLink>
          </li>
          <li>
            <NavLink to="/friends-form">Add Friend</NavLink>
          </li>
        </ul>
        <div className="friendCard">
        {this.state.friends.map((friend,id) => (
        <Route exact path="/" render={props => <FriendsList {...props} friends={friend} key={id}/>} key={id}/>
        ))}
        </div>
        <Route path="/friends-form" render={props =>  <FriendForm {...props} addNewFriend={this.addNewFriend}/>}  />
        <Route path='/friends/:id' render={props => <Friend {...props} friends={this.state.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend}/>}/>
        
      </div>
    );
  }
}

export default App;
