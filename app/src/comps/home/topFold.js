import React, { Component } from 'react'

import ReactDOM, {render} from 'react-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {Link} from 'react-router-dom'


import Parallax from 'parallax-js'
//import Background from '../../public/homeImgs/map-bg.png';

import './home.css'

export default class TopFold extends React.Component {




  render(){
    // translate all this into react JSX
    const panels = document.querySelectorAll('.panel');
    function toggleOpen() {
      this.classList.toggle('open');
      console.log("fired")
    }
    function toggleActive(e) {
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
    }
    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    return (

  <div className="panels">
     <div className="panel panel1" onClick={this.toggleOpen}>
       <p>Hey</p>
       <p>Let's</p>
       <p>Dance</p>
     </div>
     <div className="panel panel2">
       <p>Give</p>
       <p>Take</p>
       <p>Receive</p>
     </div>
     <div className="panel panel3">
       <p>Experience</p>
       <p>It</p>
       <p>Today</p>
     </div>
     <div className="panel panel4">
       <p>Give</p>
       <p>All</p>
       <p>You can</p>
     </div>
     <div className="panel panel5">
       <p>Life</p>
       <p>In</p>
       <p>Motion</p>
     </div>
   </div>

// end of render return
)}

// end of topFold class
}
