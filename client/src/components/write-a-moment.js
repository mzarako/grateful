import React, { Component } from 'react';

export default class WriteMoment extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('moment remebered');
  }
  render() {
    return (
      <div className="content-block">
        <h1>Write a Moment</h1>
        <form onSubmit={this.handleSubmit}>
            <textarea name="moment" rows="4" cols="30" />
          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}
