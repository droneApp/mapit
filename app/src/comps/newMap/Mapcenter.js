/* global google */

import canUseDOM from "can-use-dom";

import raf from "raf";

import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  InfoWindow,
} from "react-google-maps";

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);



function addMarker(){
    console.log("Make this add a marker")
  }


const GeolocationExampleGoogleMap = withGoogleMap(props => (




  <GoogleMap
    defaultZoom={12}
    center={props.center}
  >


    {props.center && (
      <InfoWindow position={props.center}>
        <div>{props.content}</div>
      </InfoWindow>
    )}
    {props.center && (
      <Circle

        onClick={addMarker}

        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `blue`,
          fillOpacity: 0.10,
          strokeColor: `green`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}

      />
    )}
  </GoogleMap>
));

export default class GeolocationExample extends Component {



  constructor(props){
    super(props)

  }

  state = {
    center: null,
    content: null,

  };

  isUnmounted = false;

  componentDidMount() {
    const tick = () => {
      if (this.isUnmounted) {
        return;
      }

    };
    geolocation.getCurrentPosition((position) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        radius: 7000,
        content: `Highlighted zone represents drone range`,
      });

      raf(tick);
    }, (reason) => {
      if (this.isUnmounted) {
        return;
      }
      this.setState({

        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  componentWillUnmount() {
    this.isUnmounted = true;
  }

  render() {



    return (

      <GeolocationExampleGoogleMap
        containerElement={
          <div style={{ height: `100%` }} />
        }
        mapElement={
          <div style={{ height: `100%` }} />
        }
        center={this.state.center}
        content={this.state.content}
        radius={this.state.radius}



      />

    );
  }
}
