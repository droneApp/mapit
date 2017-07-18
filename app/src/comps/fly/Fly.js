import React, { Component } from 'react';
import './fly.css';
import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
// import header footer
import Header from '../header/Header'
import Footer from '../footer/Footer'
// import Tab from './Tab'
// import Tab2 from './Tab2'




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
  <Tabs>
    <Tab label="Item One" >
      <div>
        <h2 style={styles.headline}>Tab One</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Item Two" >
      <div>
        <h2 style={styles.headline}>Tab Two</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
      label="onActive"
      data-route="/home"

    >
      <div>
        <h2 style={styles.headline}>Tab Three</h2>
        <p>
          This is a third example tab.
        </p>
      </div>
    </Tab>
  </Tabs>
);

export default TabsExampleSimple;


// import { Switch, HashRouter, Route} from 'react-router-dom';

// // import GeoJSONMap from './comps/maps/geoJSON/GeoJSONMap';
// import Drone from '../drone/Drone'



// class Fly extends Component {
// constructor(props){
//   super(props)
//   this.state= {}
// }

//   render() {
//     return (
//       <main>
//       <Header />
       



//       <div className="controllerContain">
         
//          <Link to="Tab"><h4>Tab</h4></Link>
//          <Link to="Tab2"><h4>Tab2</h4></Link>
        
//         <Drone/>


//       </div>





//       <Footer />
//       </main>
//     );
//   }
// }

// export default Fly;
