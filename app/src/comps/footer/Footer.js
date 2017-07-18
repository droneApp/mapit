import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import './footer.css'





export default class Footer extends Component{



render(){
  return (
    <footer>
    <div className="footerRow">

      <div className="footerMenu">

        <div className="footerMenuRow">

          <div className="fmenuItem">
            <h4>Home</h4>
          </div>
          <div className="fmenuItem">
            <Link to="team"><h4>Team</h4></Link>
          </div>

        </div>
          <div className="footerMenuRow">
            <div className="fmenuItem">
              <Link to="tech"><h4>Tech</h4></Link>
            </div>
            <div className="fmenuItem">
              <h4>Fly</h4>
            </div>
          </div>
      </div>


      <div className="relevant">
        <div className="rLinks">
          <a href="https://www.parrot.com/us/drones/parrot-bebop-2">The Drone We Used</a>
          <a href="https://www.dronedeploy.com/">Flight Path Inspiration</a>
          <a href="https://pix4d.com/">Map Generation Inspiration</a>

        </div>
      </div>
    </div>
    <div className="copyContain">
      <h5>
        Copyright 2017 ©
      </h5>
    </div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCF3pa__ETHwjTquKxziG5Ly4QHZ0f3jW0" />

    </footer>
// end of render return
  )}
// end of comp
}
