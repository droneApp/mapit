import React, { Component } from 'react';
import './team.css';
class App extends Component {
render() {
return (
<div className="full-page">
<h1 className="team-title">About Us</h1>
<section className="top-row">
<h3>
<img className='steen-about-pics' src='./our-pics/16797776_10158254923960300_8611520582224132040_o.jpg' />
Steen
<p>Area where we can write about ourselves</p></h3>
<h3>
<img className='about-pics' src='./our-pics/IMG_2076.jpg' alt="hello" />
Dallin
<p>Area where we can write about ourselves</p></h3>
</section>
<section className="bottom-row">
<h3>
<img className='about-pics' src='./our-pics/IMG_0051.JPG' />
Jacob
<p>Area where we can write about ourselves</p></h3>
<h3>
<img className='about-pics' src='./our-pics/with-Doge.jpg' />
Sean
<p>Area where we can write about ourselves</p></h3>
</section>
</div>

);
}
}

export default App
