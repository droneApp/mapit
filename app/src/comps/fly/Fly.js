import React, { Component } from 'react';
import './fly.css';
<<<<<<< HEAD
import '../drone/drone.css'
=======
import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

>>>>>>> master
// import header footer
import Header from '../header/Header'
import Footer from '../footer/Footer'






<<<<<<< HEAD
export default class Fly extends Component {
  render() {
    return (
      <main>
      <Header />
=======
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
>>>>>>> master

}

const TabsExampleSimple = () => (
  
  <div>
  <Header />
  <Tabs>
    <Tab label="Fly" >
      <div>
        <h2 style={styles.headline}>Fly</h2>
        <p>
          This is an example tab.
        </p>
        <p>
          You can put any sort of HTML or react component in here. It even keeps the component state!
        </p>
        <Slider name="slider0" defaultValue={0.5} />
      </div>
    </Tab>
    <Tab label="Map 1" >
      <div>
        <h2 style={styles.headline}>Map1</h2>
        <p>
          This is another example tab.
        </p>
      </div>
    </Tab>
    <Tab
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


// import { Switch, HashRouter, Route} from 'react-router-dom';




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
