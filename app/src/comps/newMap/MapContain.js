import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import ReactDOM, {render} from 'react-dom'
import { createStore } from 'redux'
import './map.css'
import GeolocationExample from './Mapcenter.js'

import {
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"




export default class MapContain extends Component {

  constructor(props){
    super()

    this.state={
      markers: [{
        position: {
          lat: 25.0112183,
          lng: 121.52067570000001,
        }
      }]
    }
  }

  render() {

    return (

      <div className="mapContain" style={{height: "90%"}}>

        {/* the component we imported from mapcenter */}

        <GeolocationExample
          containerElement={
            <div style={{ height: "100%" }} />

          }
          mapElement={
            <div style={{ height: "100% "}} />
          }
          markers={this.state.markers}


        />
      </div>

    )

  }


}
