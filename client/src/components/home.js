import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-block">
          Slideshow
        </div>
        <div className="content-block">
            <div className="inline-img"><img src="http://placekitten.com/g/200/200" /></div>
            <div className="inline-text">
          Explanation Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going

            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
        </div>
        <div className="content-block">
            <div className="inline-img"><img src="http://placekitten.com/g/200/200" /></div>
            <div className="inline-text">
          Science Contrary to popular belief, Lorem Ipsum is t original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
        </div>
        <div className="content-block">
            <div className="inline-img"><img src="http://placekitten.com/g/200/200" /></div>
            <div className="inline-text">
          Get inspired used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
            </div>
        </div>
      </div>
    )
  }
}
