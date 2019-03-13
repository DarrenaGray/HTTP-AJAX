import React from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
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
        {this.state.friends.map((friend,id) => (
        <FriendsList friends={friend} key={id}/>
        ))}
      </div>
    );
  }
}

export default App;
