import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logIn from '../actions/login';

class Header extends Component {
  constructor() {
    super();
    this.onLoginClicked = this.onLoginClicked.bind(this);
    this.getLoginStatus = this.getLoginStatus.bind(this);
  }
  onLoginClicked() {
    this.props.logIn();
  }
  getLoginStatus(isLoggedIn) {
    console.log('logged in:', isLoggedIn);
    const loginButtonText = isLoggedIn ? 'Sign out' : 'Log in';
    return loginButtonText;
  }
  render() {
    return (
      <header>
        <Link to="/"><h1>Mindful Moments</h1></Link>
        <div className="login-button" onClick={this.onLoginClicked}>
          {this.getLoginStatus(this.props.loggedIn)}
        </div>
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

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    logIn: logIn
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
