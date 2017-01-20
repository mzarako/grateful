import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signout from '../actions/signout';

class Header extends Component {
  constructor() {
    super();
    this.state = { hamburgerOpen: false };
    this.onSignoutClicked = this.onSignoutClicked.bind(this);
    this.navBar = this.navBar.bind(this);
    this.hamburgerClicked = this.hamburgerClicked.bind(this);
    this.toggleHamburgerNav = this.toggleHamburgerNav.bind(this);
  }
  onSignoutClicked() {
    this.props.signout();
    this.hamburgerClicked();
  }
  hamburgerClicked() {
    this.setState({hamburgerOpen: !this.state.hamburgerOpen});
  }
  returnHamburger() {
    if (this.state.hamburgerOpen) {
      let hamburger = 
      [<div className="hamburger1 animate-hamburger1"></div>,
      <div className="hamburger2 animate-hamburger2"></div>,
      <div className="hamburger3 animate-hamburger3"></div>];
      return hamburger;
    }
    else {
      let hamburger = 
      [<div className="hamburger1"></div>,
      <div className="hamburger2"></div>,
      <div className="hamburger3"></div>];
      return hamburger;
    }  
  }
  toggleHamburgerNav() {
    if (this.state.hamburgerOpen) {
      return "nav-visible";
    }
    else return "nav-hidden";
  }
  navBar(isLoggedIn) {
    if (isLoggedIn) {
      return (
       <nav className={this.toggleHamburgerNav()}>
            <ul>
              <Link to="/write-a-moment"><li>Write a Moment</li></Link>
              <Link to="/read-a-moment"><li>Read a Moment</li></Link>
              <Link to="/account"><li>Account</li></Link>
              <Link to="/"><li onClick={this.onSignoutClicked}>Sign Out</li></Link>
              <div className="button-div">
                <button type="button" onClick={this.hamburgerClicked}>
                  {this.returnHamburger()}
                </button>
              </div>  
            </ul>  
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
