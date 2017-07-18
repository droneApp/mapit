import React, { Component } from 'react';
import './App.css';

import { Switch, HashRouter, Route} from 'react-router-dom';
import Home from './comps/home/Home';
import Team from './comps/team/Team';
import Tech from './comps/tech/Tech';
import Drone from './comps/drone/Drone'

// map prototype
import GettingStartedExample from './comps/mapProto/MapProto';


class App extends Component {
  render() {
    return (

      <div>
        <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/team" component={Team}/>
        <Route path="/tech" component={Tech}/>
        <Route path="/Map" component={GettingStartedExample}/>



      </Switch>
      </HashRouter>
      </div>






    );
  }
}

export default App;
