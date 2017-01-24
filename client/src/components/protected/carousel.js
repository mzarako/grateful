import React, { Component } from 'react';
import Carousel from 'nuka-carousel';
import Moment from './moment';

export default class Nuka extends Component {
  constructor() {
    super();
    this.fillMoments = this.fillMoments.bind(this);
  }
  fillMoments() {
    const moments = [ ...this.props.moments ];
    let momentsArray = []
    for (let i = moments.length-1; i >= 0; i--) {
      const m = moments[i];
      const moment = <Moment date={m.date} text={m.moment} key={m._id} />
      momentsArray.push(moment);
    }
    return momentsArray;
  }
  render() {
    var Decorators = [
      {
        component: React.createClass({
          render() {
            return (
              <div>
                <i className="fa fa-chevron-left" onClick={this.props.previousSlide} aria-hidden="true"></i>
              </div>
            )
          }
        }),
        position: 'CenterLeft',
        style: {
          left: -20
        }
      },
      {
        component: React.createClass({
          render() {
            return (
              <div>
                <i className="fa fa-chevron-right" onClick={this.props.nextSlide} aria-hidden="true"></i>
              </div>
            )
          }
        }),
        position: 'CenterRight',
        style: {
          right: -20
        }
      }
    ];
    return (
      <Carousel decorators={Decorators} wrapAround={true}>
        {this.fillMoments()}
      </Carousel>
    )
  }
}
