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

  render() {
    console.log('Rendering');
    return (
      <div className="App">
        <div className="friendCard">
        {this.state.friends.map((friend,id) => (
        <Route path="/" render={props => <FriendsList {...props} friends={friend} key={id}/>} />
        ))}
        </div>
        <Route path="/" render={props =>  <FriendForm {...props} />}  />
      </div>
    );
  }
}

export default App;
