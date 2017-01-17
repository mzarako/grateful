import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Mindful Moments!</h1>
        <Link to="/write-a-moment">
          <div>write a moment</div>
        </Link>
      </div>
    )
  }
}
