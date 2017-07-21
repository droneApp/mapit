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
 <div className="steen">
  <h3>Steen</h3>  
<img className='steen-about-pics' src='./our-pics/16797776_10158254923960300_8611520582224132040_o.jpg' />
    <div className="middle">
<p className="our-text">Area where we can write about ourselves</p>
    </div>
</div>

{/* Dallin's section  */}
<div className="dallin">
<h3>Dallin</h3>
<img className='about-pics' src='./our-pics/FullSizeRender.jpg' alt="hello" />
<div className="middle">
<p className="our-text">Area where we can write about ourselves</p>
</div>
</div>
</section>

{/*Bottom Pictures*/}
<section className="bottom-row">
    
    {/* Jacob's Section  */}
    <div className="jacob">
<h3>Jacob</h3>
<img className='about-pics' src='./our-pics/IMG_0051_720.JPG' />
<div className="middle">
<p className="our-text">Area where we can write about ourselves</p>
</div>
</div>

    {/* Sean's Section  */}
<div className="sean">
<h3>Sean</h3>
<img className='about-pics' src='./our-pics/with-Doge.jpg' />
<div className="middle">
<p className="our-text">Area where we can write about ourselves</p>
</div>
</div>

</section>

</div>

<Footer/>
</main>
);
}
}

export default App
