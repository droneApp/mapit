import React, { Component } from 'react';
import './App.css';

import { Switch, HashRouter, Route} from 'react-router-dom';
// STATIC IMPORTS
import Home from './comps/home/Home';
import Team from './comps/team/Team';
import Tech from './comps/tech/Tech';

// FLY IMPORTS
// import GeoJSONMap from './comps/maps/geoJSON/GeoJSONMap';
import Drone from './comps/drone/Drone';
import Fly from './comps/fly/Fly';
// map prototype
import GettingStartedExample from './comps/mapProto/MapProto';



class App extends Component {
  render() {
    return (

      <div>

        <HashRouter>
      <Switch>
        {/* STATIC ROUTES */}
        <Route exact path="/" component={Home}/>
        <Route path="/team" component={Team}/>
        <Route path="/tech" component={Tech}/>


        {/* FLY APP ROUTES */}
        <Route path="/Map" component={Fly}/>




      </Switch>
      </HashRouter>
      </div>






    );
  }
}

export default App;
