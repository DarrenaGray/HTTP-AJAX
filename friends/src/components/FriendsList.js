import React from 'react';
import { Link } from 'react-router-dom';



class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        const { name, age, email, id } = this.props.friends;
        return (
            <div className="friendCardInfo">
                <Link to={`/friends/${id}`}>
                    <h1>{name}</h1>
                    <p><span>age:</span> {age}</p>
                    <p><span>email:</span> {email}</p>
                </Link>
            </div>
            
        )
    }
}


export default FriendsList;