import React, { Component } from 'react';
import {Switch, Route} from  'react-router-dom';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
        </Switch>        
      </div>
    );
  }
}

export default App;
