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
  <h3 className="team-names">Steen</h3>  
<img className='steen-team-pics' src='./our-pics/16797776_10158254923960300_8611520582224132040_o.jpg' />
<a href="https://www.linkedin.com/in/steen-sargent/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png'/></a>
    <div className="middle">
<p className="our-text">Steen Is a man of all men and brought more than just his good looks to our team... He also brought a drone.</p>
    </div>
</div>

{/* Dallin's section  */}
<div className="dallin">
<h3 className="team-names">Dallin</h3>
<img className='team-pics' src='./our-pics/FullSizeRender.jpg' alt="hello" />
<a href="https://www.linkedin.com/in/andersondallin/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png'/></a>
<div className="middle">
<p className="our-text">Dallin as casual as he stands against this tree shows his true love for...  </p>
</div>
</div>
</section>

{/*Bottom Pictures*/}
<section className="bottom-row">
    
    {/* Jacob's Section  */}
    <div className="jacob">
<h3 className="team-names">Jacob</h3>
<img className='team-pics' src='./our-pics/IMG_0051_720.JPG' />
<a href="https://www.linkedin.com/in/jacob-aintablian/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png'/></a>

<div className="middle">
<p className="our-text">Jacob as he is in this picture resembels nothing of how he actully looks now. </p>
</div>
</div>

    {/* Sean's Section  */}
<div className="sean">
<h3 className="team-names">Sean</h3>
<img className='team-pics' src='./our-pics/with-Doge.jpg' />
<a href="https://www.linkedin.com/in/ruffolos/"><img className="linkedIn" src='https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/linkedin-512.png'/></a>
<div className="middle">
<p className="our-text">Sean loves holding Dogs around his neck but what he loves more is flying drones into the ceiling.  </p>
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
