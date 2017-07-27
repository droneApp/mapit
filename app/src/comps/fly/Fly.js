import React, { Component } from 'react';
import './fly.css';
import {Link} from 'react-router-dom'

// import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Drone from '../drone/Drone';

import MapContain from '../newMap/MapContain'
import Newmap from '../newMap/Map'


// import header footer
import Header from '../header/Header';
import Footer from '../footer/Footer';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {

}







const TabsExampleSimple = () => (

  <div>
  <Header />
  <Tabs>

    <Tab  className="all-tabs" label="First" >

      <div>
        <h2 style={styles.headline}>First</h2>
        <p>
          {/* This is an example tab. */}
        </p>

        <Drone/>

      </div>
    </Tab>
    <Tab className="all-tabs" label="Map 1" >


        <div id="mapContainDiv">
          <MapContain/>
        </div>

    </Tab>
    <Tab className="all-tabs"
      label="Map 2"
      data-route="/home"

    >
      <div>
        <h2 style={styles.headline}>Map2</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>

  </Tabs>

  <Footer />
  </div>
)
export default TabsExampleSimple;
