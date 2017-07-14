import React, {Component} from 'react';
import './geoJSONMap.css';
import {withGoogleMap, GoogleMap, Rectangle, DrawingManager} from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 40.2263, lng: 111.6608 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
      />
    ))}
  </GoogleMap>
));



export default function geoJSONMap() {
    render(){
        return(
            <GettingStartedGoogleMap
                containerElement={
                <div style={{ height: `100%` }} />
                }
                mapElement={
                <div style={{ height: `100%` }} />
                }
                onMapLoad={_.noop}
                onMapClick={_.noop}
                markers={markers}
                onMarkerRightClick={_.noop}
            />,
            document.getElementById('root')
        )};
}