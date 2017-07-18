import React, { Component } from 'react';
import './drone.css'

class Drone extends Component {
    render(){
        return(
            <div className="parent">
                <div className="createdest">Create Destination</div>
                <div className="autopilot">Auto-Pilot to Destination</div>
                <div className="take-off">Take-Off</div>
                <div className="land">Land</div>

                <div className="pad1left"><p className="diamondtext">&larr;</p></div>
                <div className="pad1down"><p className="diamondtext">&larr;</p></div>
                <div className="pad1right"><p className="diamondtext">&larr;</p></div>
                <div className="pad1up"><p className="diamondtext">&larr;</p></div>

                <div className="pad2left"><img className="counterclock" src={require("./assets/counterclock.png")} alt="Turn Left" /></div>
                <div className="pad2down"><p className="down">DOWN</p><p className="downarrow">&#8897;</p></div>
                <div className="pad2right"><img className="clock" src={require("./assets/clockwise.png")} alt="Turn Left" /></div>
                <div className="pad2up"><p className="uparrow">&#8896;</p><p className="up">UP</p></div>

                <div className="scopein">+</div>
                <div className="scopeout">-</div>
                <div className="photo"><img src={require('./assets/camera.png')} alt="Take Photo" /></div>

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
        )
    }
}

export default Drone