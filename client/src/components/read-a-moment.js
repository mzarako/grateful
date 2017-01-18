import React, { Component } from 'react';

export default class ReadMoment extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="content-block">
        <h1>Read a Moment</h1>
        <div>
          <div className="read-arrow">older</div>
          <div className="read-moment">
            <p>January 3, 2017</p>
            <p>"Today was such a beautiful day. I feel so grateful to have gone to Sequoia and stood amongst the ancient giants."</p>
          </div>  
          <div className="read-arrow">newer</div>
        </div>  
        <div className="button">Display all</div>
      </div>
    )
  }
}