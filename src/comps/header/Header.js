import React, { Component } from 'react'
import {Link} from 'react-router-dom'


import './header.css'





export default class Header extends Component{
  // constructor(props) {
  // super(props);
  // this.state = {showMobile: false};
  //
  //
  //
  //
  //
  // }
  //
  //
  // mobileShow: () => {
  //     this.state = { showMobile: true };
  // }


render(){
  return (

    <header>
      <div className="menu">
        <nav>
          <div className="menuItem">
            <h4>Home</h4>
          </div>

          <div className="menuItem">
            <h4>Team</h4>
          </div>




          <div className="logoContain">
            <div className="logo">
              <h4>[logo]</h4>
            </div>
          </div>



          <div className="menuItem">
            <h4>Tech</h4>
          </div>

          <div className="menuItem">
            <h4>Fly</h4>
          </div>




        </nav>
      </div>

<div className="mobileBar">
      <div className="mobileLogo">
        <p>[logo]</p>
      </div>




      <div className="toggleMenu">
        <div className="bars">
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>
</div>





      {/* <div className="mobileMenu">



        <div className="mobile-menu-row">
          <a><p>HOME</p></a>
        </div>
        <div className="mobile-menu-row">
          <a><p>TEAM</p></a>
        </div>
        <div className="mobile-menu-row">
          <a><p>TECH</p></a>
        </div>
        <div className="mobile-menu-row">
          <a><p>FLY</p></a>
        </div>

      </div> */}




    </header>



  // end or return
  )

// end of home
}
// end of render
}
