import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, HashRouter, Route} from 'react-router-dom';
import Home from './comps/home/Home';
import Team from './comps/team/Team';
import Tech from './comps/tech/Tech';
// import GeoJSONMap from './comps/maps/geoJSON/GeoJSONMap';


class App extends Component {
  render() {
    return (

      <div>
        <HashRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/team" component={Team}/>
        <Route path="/tech" component={Tech}/>
        <Route path="/Map" component={Map}/>
      </Switch>
      </HashRouter>
      </div>







    );
  }
}

export default App;