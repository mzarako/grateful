import React, { Component } from 'react';

export default class Record_Moment extends Component {
  constructor() {
    super();
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('moment remebered');
  }
  render() {
    return (
      <div>
        <h1>Write a Moment</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your moment:
            <textarea name="moment" rows="4" cols="30" />
          </label>
          <input type="submit" value="Remember" />
        </form>
      </div>
    )
  }
}
