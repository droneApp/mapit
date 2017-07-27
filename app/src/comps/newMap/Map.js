// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import ReactDOM, {render} from 'react-dom'
// import { createStore } from 'redux'
//
//
// import './map.css'
//
// import { withGoogleMap, GoogleMap, InfoWindow, Marker } from "react-google-maps";
//
// import {geolocated} from 'react-geolocated';
// import canUseDOM from "can-use-dom"
// import raf from "raf"
//
// const geolocation = (
//   canUseDOM && navigator.geolocation ?
//   navigator.geolocation :
//   ({
//     getCurrentPosition(success, failure) {
//       failure(`Your browser doesn't support geolocation.`);
//     },
//   })
// );
//
//
// const Newmap = withGoogleMap(props => {
//
//   var markers = [
//     {
//       location: {
//         lat: 40.75,
//         lng: -73.98
//       }
//     }
//
//
//
//   ]
//
// return (
// 
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom= {14}
//
//
//     defaultCenter={{ lat: 45.6944, lng: -93.9213}}
//     markers={markers}
//   >
//     <Marker
//       //key={}
//       position={Marker.position}
//       onClick={() => props.onMarkerClick(Marker)}
//     />
//   </GoogleMap>
//
//
// )
//
//
// });
// export default Newmap
