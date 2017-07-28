import React, { Component } from 'react';
import './team.css';


// import header footer
import Header from '../header/Header'
import Footer from '../footer/Footer'




class App extends Component {
render() {
return (
    <main>
<Header />
<div className="team-background"/>
<div className="full-page">
    
<container className="team-title"><h1>About Us</h1></container>

{/*Top pictures  */}
<section className="top-row">
   {/* Steen's Section */}
   <container className="all-steen">
 <div className="steen">
  <h3 className="team-names">Steen</h3>  
<img className='steen-team-pics' src='./our-pics/16797776_10158254923960300_8611520582224132040_o.jpg' alt=""/>
<a href="https://www.linkedin.com/in/steen-sargent/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' alt="" /></a>
    <div className="middle-steen">
<p className="our-text">Steen worked on drone functionality and our backend, he also supplied the drone.</p>
    </div>
</div>
</container>

{/* Dallin's section  */}
<container className="all-dallin">
<div className="dallin">
<h3 className="team-names">Dallin</h3>
<img className='team-pics' src='./our-pics/FullSizeRender.jpg' alt="hello" />
<div className="linkin-container">
<a href="https://www.linkedin.com/in/andersondallin/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' alt="" /></a>
</div>

<div className="middle">
<p className="our-text">Dallin incorporated our tabs portion and worked on front end styling.</p>
</div>
</div>
</container>
</section>

{/*Bottom Pictures*/}
<section className="bottom-row">
    
    {/* Jacob's Section  */}
    <container className="all-jacob">
    <div className="jacob">
<h3 className="team-names">Jacob</h3>
<img className='team-pics' src='./our-pics/IMG_0051_720.JPG' alt="" />
<div className="linkin-container">
<a href="https://www.linkedin.com/in/jacob-aintablian/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' alt="" /></a>
</div>

<div className="middle">
<p className="our-text">Jacob created our flight controller, worked on front end components, and styling.</p>
</div>
</div>
</container>

    {/* Sean's Section  */}
<container className="all-sean">
<div className="sean">
<h3 className="team-names">Sean</h3>
<img className='team-pics' src='./our-pics/with-Doge.jpg' alt="" />
<div className="linkin-container">
<a href="https://www.linkedin.com/in/ruffolos/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png' alt="" /></a>
</div>
<div className="middle">
<p className="our-text">Sean created our landing site page and worked on drone functionality and our backend.</p>
</div>
</div>

</container>
</section>

</div>
<Footer/>
</main>
);
}
}

export default App
