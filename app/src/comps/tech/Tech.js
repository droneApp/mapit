import React, { Component } from 'react';
import './tech.css'

class Tech extends Component {
    render() {
        return (
            <div>
                <div className="techHeading">Tech</div>
                <div className="h2">Drone: Parrot Bebop 2</div>
                <div className="techDrone"><img src={require('./assets/bebop.png')} id="techDroneImg" alt="Drone" /></div>
                <div className="scriptbox"><p className="description">Weighing 500 g and offering 25 minutes of autonomous flight time</p></div>
                <div className="techList">Tech Used :</div>

                    <li>ReactJS</li>
                    <li>Node</li>
                    <li>SQL</li>
                    <li>CSS</li>
                    <li>Node Package : node-bebop</li>

                

            </div>
        )
    }
}
export default Tech
