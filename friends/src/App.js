import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import FriendsList from './components/FriendsList';
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
        this.props.history.push('/friends')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log('Rendering', this.state.friends);
    return (
      <div className="App">
        <div className="friendCard">
        {this.state.friends.map((friend,id) => (
        <Route path="/friends" render={props => <FriendsList {...props} friends={friend} key={id}/>} key={id}/>
        ))}
        </div>
        <Route path="/friends" render={props =>  <FriendForm {...props} addNewFriend={this.addNewFriend}/>}  />
      </div>
    );
  }
}

export default App;
