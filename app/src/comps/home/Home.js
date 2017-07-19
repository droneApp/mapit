import React, { Component } from 'react'

import ReactDOM, {render} from 'react-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import {Link} from 'react-router-dom'


import Parallax from 'parallax-js'
//import Background from '../../public/homeImgs/map-bg.png';

import './home.css'

export default class Home extends React.Component {


componentDidMount() {

  var scene = document.getElementById('mapDiv')

  var parallax = new Parallax(scene)



}




render(){
  return (

    <main>
        <Header />
        <section>
          <h1 className="homeHeader">Drone Maps in 3 Simple Steps</h1>

          <div className="bannerContain">
              <div className="bannerPiece firstB">
                <h2>Pin it</h2>
                <img src="./homeImgs/pin.jpg" alt=""></img>
              </div>

              <div className="bannerArrow"></div>

              <div className="bannerPiece secondB">
                <h2>Fly it</h2>
                <img src="./homeImgs/fly.jpg" alt=""></img>

              </div>

              <div className="bannerArrow"></div>

              <div className="bannerPiece thirdB">
                <h2>Map it</h2>
                <img src="./homeImgs/map.png" alt=""></img>

              </div>
          </div>
        </section>



        <section>

          <div className="homeHeadingContain">

            <h3>Map Your Event, Construction, or Property</h3>
            <h4>We Make Mapping A Breeze For Pros and Hobbyists</h4>
          </div>


        </section>
        <section>
          <div id="mapDiv">
              <div id="mapBG" data-depth="0.00"><img src="./homeImgs/map-bg.png" /></div>

              <div id="dronediv" data-depth="0.87"><img src="./homeImgs/drone.png"/></div>

              <div id="takeFlightBox" data-depth="0.18"><button id="takeFlight"><Link to="Map">Take Flight</Link></button></div>


          </div>
        </section>










      <Footer />
    </main>





  // end of render return
)}

// end of home
}
