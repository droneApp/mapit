import React, { Component } from 'react';
import './drone.css'


class Drone extends Component {
  constructor(props){
    super(props)
    this.state = {
      droneAction: ''
    }




// end of constructor
  }


  panLeft(){
    console.log('pan left')
  }
  panBack(){
    console.log('pan back')
  }
  panRight(){
    console.log('pan back')
  }
  panForward(){
    console.log('pan forward')
  }






    render(){
        return(
            <div className="manualController">
                <div className="manualButton diamond"><p className="diamondtext">&larr;</p></div>
                <div className="manualButton diamond2"><p className="diamondtext">&larr;</p></div>
                <div className="manualButton diamond3"><p className="diamondtext">&larr;</p></div>
                <div className="manualButton diamond4"><p className="diamondtext">&larr;</p></div>
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

export default Drone
