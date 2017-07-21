import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';


import { Switch, HashRouter, Route} from 'react-router-dom';
// STATIC IMPORTS
import Home from './comps/home/Home';
import Team from './comps/team/Team';
import Tech from './comps/tech/Tech';

// FLY IMPORTS
// import GeoJSONMap from './comps/maps/geoJSON/GeoJSONMap';
import Drone from './comps/drone/Drone';
import Fly from './comps/fly/Fly';

import Map from './comps/newMap/Map'






injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div>

        {/* <Tech /> */}


          <HashRouter>
      <Switch>
        {/* STATIC ROUTES */}
         <Route exact path="/" component={Home}/>
        <Route path="/team" component={Team}/>
        <Route path="/tech" component={Tech}/>


        {/* FLY APP ROUTES */}

        <Route path="/fly" component={Fly}/>
        <Route path="/fly" component={Map}/>




       </Switch>
      </HashRouter>

      </div>
      </MuiThemeProvider>





    );
  }
}

export default App;
