import React, { Component } from 'react';
import './tech.css'

// import header footer
import Header from '../header/Header'
import Footer from '../footer/Footer'


class Tech extends Component {
    render() {
        return (

            <main>
               

            <div>
                
                <div className="techHeading">Tech</div>
                <a href="https://www.parrot.com/us/drones/parrot-bebop-2"className="h2">Drone: Parrot Bebop 2</a>
                <div className="techDrone"><img src={require('./assets/bebop.png')} id="techDroneImg" alt="Drone" /></div>
                <div className="scriptbox"><p className="description">Weighs 500g offers 25 minutes of autonomous flight time. Holds an HD camera and flight stability.</p></div>
                <div className="techList">Tech Used :</div>

                    <li>- ReactJS</li>
                    <li>- Node</li>
                    <li>- SQL</li>
                    <li>- CSS</li>
                    <li>- Node Package : node-bebop</li>

                
                 
            </div>


            <Footer />
            </main>
        )
    }
}
export default Tech
