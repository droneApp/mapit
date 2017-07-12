import React, { Component } from 'react';
import './App.css';

import Tech from './comps/tech/Tech'

import Home from './comps/home/Home'
import Header from './comps/header/Header'


class App extends Component {
  render() {
    return (

      <div>
          <Tech />
     
        <Home/>

      </div>


    );
  }
}

export default App;
