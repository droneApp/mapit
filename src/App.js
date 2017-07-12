import React, { Component } from 'react';
import './App.css';
import Tech from './comps/tech/Tech'
import Home from './comps/home/Home'
import Header from './comps/header/Header'
import Drone from './comps/drone/Drone'

class App extends Component {
  render() {
    return (

      <div>
          
          <Drone />
         
      </div>


    );
  }
}

export default App;
