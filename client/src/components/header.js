import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signout from '../actions/signout.action';
import logo from '../../images/galaxygrapefruit-logo.svg';


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
      return (
      [<div className="hamburger1 animate-hamburger1" key="ham1"></div>,
      <div className="hamburger2 animate-hamburger2" key="ham2"></div>,
      <div className="hamburger3 animate-hamburger3" key="ham3"></div>]
      )
    }
    else {
      return (
      [<div className="hamburger1" key="ham1"></div>,
      <div className="hamburger2" key="ham2"></div>,
      <div className="hamburger3" key="ham3"></div>]
      )
    }
  }
  toggleHamburgerNav() {
    if (this.state.hamburgerOpen) {
      return "nav-visible";
    }
    else return "nav-hidden";
  }
  navBar(authenticated) {
    console.log('authenticated?', authenticated);
    if (authenticated) {
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
          <div className="login"><h4>
            <Link to="/login">Login |</Link><Link to="/signup"> Signup</Link>
          </h4></div>
        )
    }
  }
  render() {
    return (
      <header>
        <Link className="a-logo" to="/"><img src={logo} /></Link>
        {this.navBar(this.props.authenticated)}
      </header>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

function mapDispatchToProps(dispatch) {
  const actions = {
    signout: signout
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
