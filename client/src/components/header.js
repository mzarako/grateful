import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
  	const loggedIn = [
  			<Link to="/write-a-moment"><li>Write a Moment</li></Link>,
            <Link to="/read-a-moment"><li>Read a Moment</li></Link>,
            <Link to="/account"><li>Account</li></Link>,
            <Link to="/"><li>Sign Out</li></Link>];
    const loggedOut = [
    		<Link to="/login"><li>Login | Signup</li></Link>];        
    return (
      <header>
        <Link to="/"><h1>Mindful Moments</h1></Link>
        <div className="menu">
          <ul>
            {loggedIn}
          </ul>
        </div>
      </header>
    )
  }
}
