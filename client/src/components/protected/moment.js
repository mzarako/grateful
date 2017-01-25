import React from 'react';

export default function Moment(props) {
  return (
    <div className="moment">
      <div>
        <p>{props.date}</p>
      </div>
      <div className="read-moment-text">
        <span className="fa fa-quote-left"></span>
        <p>{props.text}</p>
      </div>
      <span className="fa fa-quote-right"></span>
    </div>
  )
}
