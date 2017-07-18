import React, { Component } from 'react';
import './drone.css'



export default class Drone extends Component {
  constructor(props){
    super(props)
    this.state = {
      droneAction: ''
    }

  // binding keyclick functions
  this.panLeft = this.panLeft.bind(this)
  this.panBack = this.panBack.bind(this)
  this.panRight = this.panRight.bind(this)
  this.panForward = this.panForward.bind(this)


// end of constructor
  }







  // click function groundwork
  panLeft(){
    console.log('pan left')
  }
  panBack(){
    console.log('pan back')
  }
  panRight(){
    console.log('pan right')
  }
  panForward(){
    console.log('pan forward')
  }

  // document.getElementById("leftPan").addEventListener ("click", panLeft, false);
  // document.getElementById("backPan").addEventListener ("click", panBack, false);
  // document.getElementById("rightPan").addEventListener ("click", panRight, false);
  // document.getElementById("forwardPan").addEventListener ("click", panForward, false);






    render(){
        return(

            <div className="manualController">
                <div onClick={event => this.panLeft(event.target.id)} id="leftPan" className="manualButton diamond"><p className="diamondtext">&larr;</p></div>
                <div onClick={event => this.panBack(event.target.id)} id="backPan" className="manualButton diamond2"><p className="diamondtext">&larr;</p></div>
                <div onClick={event => this.panRight(event.target.id)} id="rightPan" className="manualButton diamond3"><p className="diamondtext">&larr;</p></div>
                <div onClick={event => this.panForward(event.target.id)} id="forwardPan" className="manualButton diamond4"><p className="diamondtext">&larr;</p></div>
                <div className="manualButton diamond5"><img className="counterclock" src={require("./assets/counterclock.png")} alt="Turn Left" /></div>
                <div className="manualButton diamond6"><p className="down">DOWN</p><p className="downarrow">&#8897;</p></div>
                <div className="manualButton diamond7"><img className="clock" src={require("./assets/clockwise.png")} alt="Turn Left" /></div>
                <div className="manualButton diamond8"><p className="uparrow">&#8896;</p><p className="up">UP</p></div>
                <div className="manualButton scope">+</div>
                <div className="manualButton scopeout">-</div>
                <div className="manualButton photo">Take Photo</div>
                <div className="manualButton destination">Create Destination</div>
                <div className="manualButton autopilot">Auto-Pilot to Destination</div>
                <div className="manualButton depart">Take-Off</div>
                <div className="manualButton land">Land</div>
            </div>



        )
    }
}
