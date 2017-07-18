import React, { Component } from 'react';
import './fly.css';

// import header footer
import Header from '../header/Header'
import Footer from '../footer/Footer'



import { Switch, HashRouter, Route} from 'react-router-dom';

// import GeoJSONMap from './comps/maps/geoJSON/GeoJSONMap';
import Drone from '../drone/Drone'



export default class Fly extends Component {
  render() {
    return (
      <main>
      <Header />


      <div className="controllerContain">

        <Drone/>

      </div>





      <Footer />
      </main>
    );
  }
}
