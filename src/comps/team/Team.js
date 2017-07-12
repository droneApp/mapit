import React, { Component } from 'react'; 
// import React from 'react';
import './team.css';
import {link} from 'react-router-dom';
export default class  Team extends Component {
    render() {
        return ( 
           <div>
           
            <h1>Team</h1>
           
            <section className="top-row">
                  <h3> 
                <img className='steen-about-pics' src='./our-pics/16797776_10158254923960300_8611520582224132040_o.jpg' />
                Steen
                <p>Things about us we can write here or whatever.</p></h3>
                <h3>
                <img className='about-pics' src='./our-pics/IMG_2076.jpg' />
                Dallin
                <p>Things about us we can write here or whatever.</p></h3>
                
              </section>
              <section className="bottom-row">
                <h3>
                <img className='about-pics' src='./our-pics/IMG_0051.JPG' />
                Jacob
                <p>Things about us we can write here or whatever.</p>
                </h3>

                <h3>
                <img className='about-pics' src='./our-pics/with-Doge.jpg' />
                Sean
                <p>Things about us we can write here or whatever.</p></h3>
              </section>
                </div>

        );
    }
}

 