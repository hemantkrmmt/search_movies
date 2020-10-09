import React from 'react';
import Signup from './components/Signup';
import Home from './components/Home';
import SearchMovie from './components/SearchMovie';
import Error from './components/Error';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
   render(){
    return (
        <main>
            <Switch>
            <Route path="/" component={Home} exact />
                <Route path="/signup" component={Signup} />
                <Route path="/searchMovie" component={SearchMovie} />
                <Route component={Error} />
            </Switch>
        </main>
    )
   } 
}

export default App;