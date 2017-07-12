import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'


// import fly from './imgs/fly.jpg'
// import pin from './imgs/pin.jpg'
// import map from './imgs/map.png'

import Parallax from 'parallax-js'

import './home.css'

export default function Home(){
var scene = document.getElementById('mapDiv')

var parallax = new Parallax(scene)

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

              <div className='layer' data-depth="0.40"><img src="./homeImgs/drone.png"/></div>

          </div>
        </section>







      <div className="spacer">







      </div>


      <Footer />
    </main>





  // end or return
  )

// end of home
}
