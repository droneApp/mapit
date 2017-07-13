import React, {Component} from 'react';
import './geoJSONMap.css';
import ReactMapboxGl, {Layer, GeoJSONLayer} from 'react-mapbox-gl';

const Map = ReactMapboxGl({
    accessToken: 'pk.eyJ1Ijoic2FyZ2VudDg4IiwiYSI6ImNqMzY0aHRoODAwbGszMmxpdjd5NTl6OHgifQ.zWE7w8Bs3NvC6rhFXguUTQ'
})

<Map
    container = 'map'
    style = 'mapbox://styles/mapbox/streets-v9'
    center = {[111.6608, 40.2263]}
    className = 'geo-map'
    containerStyle={{
        height: "100vh",
        width: "100vw"
  }}>
    <Layer 
        layout = {{}}
        paint = {{
            fill-color: '#088',
            fill-opacity: 0.8
        }}>
        <GeoJSON
            type = 'fill'
            source = {{
                type: 'geojson',
                data: {
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: location
                    }
                }
            }}/>
    </Layer>
</Map>


export default function geoJSONMap() {
    return (
        <h1>Pick Your Points</h1>
    )
}