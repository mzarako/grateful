import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/"><h1>Mindful Moments</h1></Link>
        <div className="menu">
          <ul>
            <li>My Account</li>
            <Link to="/write-a-moment"><li>Write a Moment</li></Link>
            <li>Read a Moment</li>
            <li>Login/Signup</li>
          </ul>
        </div>
      </header>
    )
  }
}
