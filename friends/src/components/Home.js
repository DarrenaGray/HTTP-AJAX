import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {

    return (
        <div className="home">
            <h1>Let's Be Friends</h1>
            <Link to="/friends"><button>See Friends</button></Link>
        </div>
    )
}


export default Home;