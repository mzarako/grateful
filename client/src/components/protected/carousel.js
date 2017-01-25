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
    if (moments.length > 0) {
      for (let i = moments.length-1; i >= 0; i--) {
        const m = moments[i];
        const moment = <Moment date={m.date} text={m.moment} key={m._id} />
        momentsArray.push(moment);
      }
    }
    else {
      const welcome = <Moment date="You have no moments yet." text="Go to 'Write a Moment' to write your first moment" key="noMoment" />
      momentsArray.push(welcome);
    }
    console.log(momentsArray);
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
