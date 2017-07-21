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
          <div className="Pads">
          <div className="Pad1">
            <div className="manualButton pad1left"><p className="diamondtext">&larr;</p></div>
            <div className="manualButton pad1down"><p className="diamondtext">&larr;</p></div>
            <div className="manualButton pad1right"><p className="diamondtext">&larr;</p></div>
            <div className="manualButton pad1up"><p className="diamondtext">&larr;</p></div>
          </div>
          <div className="Pad2">
            <div className="manualButton pad1left"><p className="counterclock">&#8634;</p></div>
            <div className="manualButton pad1down"><p className="down">DOWN</p><p className="downarrow">&#8897;</p></div>
            <div className="manualButton pad1right"><p className="clockwise">&#8635;</p></div>
            <div className="manualButton pad1up"><p className="uparrow">&#8896;</p><p className="up">UP</p></div>
          </div>
          </div> 
          <div className="manualButton take-off">Take-Off</div>
          <div className="manualButton land">Land</div>
          <div className="videofeed"></div>

          <div className="manualButton createdest">Create Destination</div>
          <div className="manualButton autopilot">Auto-Pilot to Destination</div>
          
          
          {/* <div className="manualButton scopein">+</div>
          <div className="manualButton scopeout">-</div>
          <div className="manualButton photo"><img src={require('./assets/camera.png')} alt="Take Photo" /></div> */}

          <div className="ctrlparent">
            <div className="controls">
              <div className="ctrlheader">Keyboard Controls</div>
              <div>WASD = Left Pad</div>
              <div>Arrow = Right Pad</div>
              <div>Space Bar = Takeoff/Land</div>
              <div>Q = Scope Out</div>
              <div>W = Scope In</div>
             <div>Enter = Take Photo</div>
            </div>
          </div>
        </div>

           
        )
    }
}

export default Drone
