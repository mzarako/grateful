import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-block">
          Slideshow
        </div>
        <div className="content-block">
          Explanation
        </div>
        <div className="content-block">
          Science
        </div>
        <div className="content-block">
          Get inspired
        </div>
      </div>
    )
  }
}
