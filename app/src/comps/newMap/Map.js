// import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
// import ReactDOM, {render} from 'react-dom'
// import { createStore } from 'redux'
//
//
// import './map.css'
//
// import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
//
// // Wrap all `react-google-maps` components with `withGoogleMap` HOC
// // and name it GettingStartedGoogleMap
//
// const Newmap = withGoogleMap(props => {
//
//   <GoogleMap
//
//     ref={props.onMapLoad}
//     defaultZoom={3}
//     defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
//     onClick={props.onMapClick}
//   >
//
//     {props.markers.map((marker, index) => (
//       <Marker
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(index)}
//       />
//     ))}
//   </GoogleMap>
// });
// // Then, render it:
//
// render(
//
//   <Newmap
//
//     containerElement={
//       <div style={{ height: `100%` }} />
//     }
//     mapElement={
//       <div style={{ height: `100%` }} />
//     }
//     // onMapLoad={_.noop}
//     // onMapClick={_.noop}
//     // markers={markers}
//     // onMarkerRightClick={_.noop}
//   />,
//   document.getElementById('root')
// );
//
// export default Newmap
