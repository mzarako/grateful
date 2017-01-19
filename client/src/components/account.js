import React, { Component } from 'react';

export default class ReadMoment extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="content-block">
        <h1>Account Information</h1>
        <h4>Username: </h4><p>Fallopian Tube</p>
        <button>Change Username</button>
        <button>Change Password</button>
        <h4>Run into an issue? Wanna chat? <a href="mailto:mindfulmoments@gmail.com?" target="_top">Contact us.</a></h4>
        <button>Delete Account</button>
        <p>*Note that deleting your account will remove all of your saved moments.</p>
      </div>
    )
  }
}