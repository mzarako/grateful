import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import logIn from '../actions/login';

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.logIn();
  }
  render() {
    return (
      <section>
        <h1>You're one step away from your collection of moments.</h1>
         <form onSubmit={this.handleSubmit}>
          <textarea name="email" rows="1" cols="10" />
          <input type="submit" value="Submit" />
        </form>
      </section>
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
    logIn: logIn
  }
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);