import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signout from '../actions/signout';

class Header extends Component {
  constructor() {
    super();
    this.onSignoutClicked = this.onSignoutClicked.bind(this);
    this.navBar = this.navBar.bind(this);
  }
  onSignoutClicked() {
    this.props.signout();
  }
  navBar(isLoggedIn) {
    if (isLoggedIn) {
      return (
       <nav>
          <button type="button">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </button>
          <div className="nav-div">
            <ul>
              <Link to="/write-a-moment"><li>Write a Moment</li></Link>
              <Link to="/read-a-moment"><li>Read a Moment</li></Link>
              <Link to="/account"><li>Account</li></Link>
              <Link to="/"><li onClick={this.onSignoutClicked}>Sign Out</li></Link>
            </ul>
          </div>  
      </nav>
        )
    }
    else {
      return (
        <Link to="/login"><h4>Login | Signup</h4></Link>
        )
    }
  }
  render() {       
    return (
      <header>
        <Link to="/"><h1>Mindful Moments</h1></Link>
        {this.navBar(this.props.isLoggedIn)}
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.isLoggedIn
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    signout: signout
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
