import React, {Component} from 'react';
import './geoJSONMap.css';
import ReactMapboxGl, {GeoJSONLayer} from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoic2FyZ2VudDg4IiwiYSI6ImNqMzY0aHRoODAwbGszMmxpdjd5NTl6OHgifQ.zWE7w8Bs3NvC6rhFXguUTQ'
})

{/*<Map
    id='area-to-map'
    type='polygon'
    layout={{'addLayer'}}
    />*/}


export default function geoJSONMap() {
    return (
        <h1>Pick Your Points</h1>
    )
}