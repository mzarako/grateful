import React, { Component } from 'react';
import { Link } from 'react-router';
import heart from '../../images/heart.svg';
import exclamation from '../../images/exclamation.svg';
import faces from '../../images/faces.svg';
import hashtag from '../../images/hashtag.svg';
import jar from '../../images/jar.svg';
import lightbulb from '../../images/lightbulb.svg';
import sunhead from '../../images/sunhead.svg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-img"></div>
            <div className="hero-text">
              <h4>Fill your life with Mindful Moments and watch your gratitude grow!</h4>
            </div>
        </section>
        <section className="sec-home1">
            <div className="home1-text-1">
              <h4>Mindful Moments are personal notes of gratitude. They can be about...</h4>
              <div>
                <ul>
                  <li><img src={heart} />health and well-being</li>
                  <li><img src={exclamation} id="exclamation" />a welcome surprise</li>
                  <li><img src={faces} />personal connections</li>
                  <li><img src={hashtag} id="hashtag" />. . . anything at all</li>
                </ul>
              </div>
            </div>
            <div className="home1-text-2">
                <h4>Read your Moments at the year's end or whenever you need a reminder to smile.</h4>
               <div className="sample-moment"><p>"My sister is amazing. Today she told me exactly what I needed to hear- You have to feel fear to be brave!"</p></div>
               <img src={jar} />
            </div>
        </section>
        <section className="sec-home2">
            <div className="home2-img"><img src={lightbulb} /></div>
            <div className="home2-text">
                <h4>The science on gratitude is bubbling with exciting findings– people who take time to feel grateful are happier, healthier, and more positive.</h4><button><a href="http://www.health.harvard.edu/newsletter_article/in-praise-of-gratitude" target="_blank"><h4>Learn More</h4></a></button>
            </div>
        </section>
        <section className="sec-home3">
            <div className="home3-text">
              <h4>Capture the splendor of your life with your personal collection of Mindful Moments.</h4><button><Link to="/login"><h4>Sign Up (free!)</h4></Link></button>
            </div>
            <div className="home3-img"><img src={sunhead} /></div>
        </section>
      </div>
    )
  }
}
