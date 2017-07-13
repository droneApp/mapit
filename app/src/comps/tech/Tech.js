import React, { Component } from 'react';
import './tech.css'

class Tech extends Component {
    render() {
        return (
            <div>
                <div className="head">Tech</div>
                <div className="h2">Drone: Parrot Bebop 2</div>
                <div className="drone"><img src={require('./assets/bebop.jpg')} alt="Drone" /></div>
                <div className="scriptbox"><p className="description">Weighing 500 g and offering 25 minutes of autonomous flight time</p></div>
                <div className="tech">Tech Used</div>
                    
                    <li>ReactJS</li>
                    <li>Node</li>
                    <li>SQL</li>
                    <li>CSS</li>
                


            </div>
        )
    }
}
export default Tech