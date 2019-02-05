import React, { Component } from 'react';
import {Switch, Route} from  'react-router-dom';
import Home from './routes/Home';
import Sabores from './routes/Sabores';
import Page404 from './routes/Page404';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/sabores" component={Sabores}/>
          <Route path="*" component={Page404} />        
        </Switch>        
      </div>
    );
  }
}

export default App;
