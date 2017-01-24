import React from 'react';

export default function Moment(props) {
  return (
    <div className="moment">
      <div>
        <p>{props.date}</p>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
