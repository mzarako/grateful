import React, { Component } from 'react';

export default class ReadMoment extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <section>
        <h1>Read a Moment</h1>
        <div>
          <div className="read-arrow">arrow</div>
          <div className="read-moment">
            <p>January 3, 2017</p>
            <p>"Today was such a beautiful day. I feel so grateful to have gone to Sequoia and stood amongst the ancient giants."</p>
          </div>  
          <div className="read-arrow">arrow</div>
        </div>  
        <button type="button">Save changes</button>
        <button type="button">Delete</button>
        <button type="button">Display all</button>
      </section>
    )
  }
}