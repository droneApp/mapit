import React, { Component } from 'react';
import './drone.css'

class Drone extends Component {
    render(){
        return(
            <div>
                <div className="diamond"><p className="diamondtext">Strafe Left</p></div>
                <div className="diamond2"><p className="diamondtext">Move Back</p></div>
                <div className="diamond3"><p className="diamondtext">Strafe Right</p></div>
                <div className="diamond4"><p className="diamondtext">Move Forward</p></div>
                <div className="diamond5"><p className="diamondtext">Turn Left</p></div>
                <div className="diamond6"><p className="diamondtext">Lower Drone</p></div>
                <div className="diamond7"><p className="diamondtext">Turn Right</p></div>
                <div className="diamond8"><p className="diamondtext">Rise Drone</p></div>
                <div className="">Scope out</div>
                <div className="">Scope in</div>
                <div className="">Take Photo</div>
                <div className="">Create Destination</div>
                <div className="">Auto-Pilot to Destination</div>
                <div className="depart">Take-Off</div>
                <div className="land">Land</div>
            </div>
        )
    }
}

export default Drone