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
        <div className="login-button" onClick={this.onLoginClicked}>
          {this.getLoginStatus(this.props.loggedIn)}
        </div>
        <div className="menu">
          <ul>
            {loggedIn}
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
