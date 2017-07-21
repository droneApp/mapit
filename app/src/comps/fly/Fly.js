import React, { Component } from 'react';
import './fly.css';
import {Link} from 'react-router-dom'

// import {Link} from 'react-router-dom'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import Drone from '../drone/Drone';



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
      <div>
        <h2 style={styles.headline}>Map1</h2>
        <p>
          This is another example tab.
        </p>
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
