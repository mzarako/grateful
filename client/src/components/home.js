import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="home-img"></div>
            <div className="home-text">
              <h4>Fill your year with Mindful Moments and watch your gratitude grow!</h4>
            </div>
        </section>
        <section>
            <div className="home-text">
              <h4>Mindful Moments are personal notes of gratitude. They can be... funny, beautiful, a new connection, calm, etc. Write a Moment every day or every week.</h4>
            </div>
            <div className="home-text">
               <h4>Read your Moments at the year's end, or whenever you need a reminder to smile.</h4>
            </div>
        </section>
        <section>
            <div className="home-img"></div>
            <div className="home-text">
                <h4>The science on gratitude is bubbling with exciting findings– people who take time to feel grateful are happier, healthier, and more positive.</h4><Link to="http://www.health.harvard.edu/newsletter_article/in-praise-of-gratitude"><h4>Learn More</h4></Link>
            </div>
        </section>
        <section>
            <div className="home-img"></div>
            <div className="home-text">
              <h4>Capture the splendor of your life with your personal collection of Mindful Moments.</h4><Link to="/login"><h4>Sign Up (free!)</h4></Link>
            </div>
        </section>
      </div>
    )
  }
}
