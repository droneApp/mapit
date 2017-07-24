import React, { Component } from 'react';
import './drone.css'

import Axios from 'axios'
import Request from 'react-http-request'

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
  this.stop = this.stop.bind(this)


// end of constructor
  }







  // click function groundwork
  launch(){
    console.log('launching')
    return Axios.post('http://localhost:3000/launch').then(resp => {
      console.log(resp)
    })
  }
  panLeft(){
    console.log('pan left')
    return Axios.post('http://localhost:3000/pan-left').then(resp => {
      console.log(resp)
    })
  }
  panBack(){
    console.log('pan back')
    return Axios.post('http://localhost:3000/pan-back').then(resp => {
      console.log(resp)
    })
  }
  panRight(){
    console.log('pan right')
    return Axios.post('http://localhost:3000/pan-right').then(resp => {
      console.log(resp)
    })

  }
  panForward(){
    console.log('pan forward')
    return Axios.post('http://localhost:3000/pan-forward').then(resp => {
      console.log(resp)
    })

  }
  stop(){
    console.log('hovering')
    return Axios.post('http://localhost:3000/stop').then(resp => {
      console.log(resp)
    })

  }
  land(){
    console.log('landing')
    return Axios.post('http://localhost:3000/land').then(resp => {
      console.log(resp)
    })
  }

// more movements
  rotateRight(){
    console.log('rotate right')
    return Axios.post('http://localhost:3000/rotate-right').then(resp => {
      console.log(resp)
    })

  }
  rotateLeft(){
    console.log('rotate left')
    return Axios.post('http://localhost:3000/rotate-left').then(resp => {
      console.log(resp)
    })

  }
  up(){
    console.log('going up')
    return Axios.post('http://localhost:3000/up').then(resp => {
      console.log(resp)
    })

  }
  down(){
    console.log('going down')
    return Axios.post('http://localhost:3000/down').then(resp => {
      console.log(resp)
    })

  }







    render(){

        return(



      <div className="manualController">
         <div className="Pads">
         <div className="Pad1">
           <div onClick={event => this.panLeft(event.target.id)} id="leftPan" className="manualButton pad1left"><p className="diamondtext">&larr;</p></div>
           <div onClick={event => this.panBack(event.target.id)} id="backPan" className="manualButton pad1down"><p className="diamondtext">&larr;</p></div>
           <div onClick={event => this.panRight(event.target.id)} id="rightPan" className="manualButton pad1right"><p className="diamondtext">&larr;</p></div>
           <div onClick={event => this.panForward(event.target.id)} id="forwardPan" className="manualButton pad1up"><p className="diamondtext">&larr;</p></div>
         </div>


         <div className="Pad2">
            <div  onClick={event => this.rotateLeft(event.target.id)} className="manualButton pad1left"><p className="counterclock">&#8634;</p></div>
            <div onClick={event => this.down(event.target.id)} className="manualButton pad1down"><p className="down">DOWN</p><p className="downarrow">&#8897;</p></div>
            <div onClick={event => this.rotateRight(event.target.id)} className="manualButton pad1right"><p className="clockwise">&#8635;</p></div>
            <div onClick={event => this.up(event.target.id)} className="manualButton pad1up"><p className="uparrow">&#8896;</p><p className="up">UP</p></div>
          </div>




         </div>
         <div onClick={event => this.launch(event.target.id)} className="manualButton take-off">Take-Off</div>
         <div onClick={event => this.land(event.target.id)} className="manualButton land">Land</div>
          <div className="videofeed"></div> 

         <div onClick={event => this.stop(event.target.id)}  className="manualButton createdest">Create Destination</div>
         <div onClick={event => this.launch(event.target.id)} className="manualButton autopilot">Auto-Pilot to Destination</div>


          {/* <div className="manualButton scopein">+</div>
         <div className="manualButton scopeout">-</div>
         <div className="manualButton photo"><img src={require('./assets/camera.png')} alt="Take Photo" /></div>  */}

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
