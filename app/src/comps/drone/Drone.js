import React, { Component } from 'react';
import './drone.css'

class Drone extends Component {
    render(){
        return(
            <div>
                <div className="diamond"><p className="diamondtext">&larr;</p></div>
                <div className="diamond2"><p className="diamondtext">&larr;</p></div>
                <div className="diamond3"><p className="diamondtext">&larr;</p></div>
                <div className="diamond4"><p className="diamondtext">&larr;</p></div>
                <div className="diamond5"><img className="counterclock" src={require("./assets/counterclock.png")} alt="Turn Left" /></div>
                <div className="diamond6"><p className="down">DOWN</p><p className="downarrow">&#8897;</p></div>
                <div className="diamond7"><img className="clock" src={require("./assets/clockwise.png")} alt="Turn Left" /></div>
                <div className="diamond8"><p className="uparrow">&#8896;</p><p className="up">UP</p></div>
                <div className="scope">+</div>
                <div className="scopeout">-</div>
                <div className="photo">Take Photo</div>
                <div className="destination">Create Destination</div>
                <div className="autopilot">Auto-Pilot to Destination</div>
                <div className="depart">Take-Off</div>
                <div className="land">Land</div>
            </div>
        )
    }
}

export default Drone