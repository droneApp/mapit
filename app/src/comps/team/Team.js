import React, {Component} from 'react';
import './team.css';
class App extends Component {
    render() {
        return (
           <div>
            <head>
            <h2>About Us</h2>
            </head>
            <section class="top-row">
                  <p>
                <img class='steen-about-pics' src='./our-pics/16797776_10158254923960300_8611520582224132040_o.jpg' />
                Steen</p>
                <p>
                <img class='about-pics' src='./our-pics/IMG_2076.jpg' />
                Dallin</p>
              </section>
              <section class="bottom-row">
                <p>
                <img class='about-pics' src='./our-pics/IMG_0051.JPG' />
                Jacob</p>
                <p>
                <img class='about-pics' src='./our-pics/with-Doge.jpg' />
                Sean</p>
              </section>
                </div>

        );
    }
}
