import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const cssstyle = {

}

const Home = () => {
    return (<>
        <div className="centered">
            <Link to="/signup"><button className="button">Sign Up</button></Link>
            <Link to="/searchMovie"><button className="button">Search Movie</button></Link>
        </div>

    </>
    );
}

export default Home;