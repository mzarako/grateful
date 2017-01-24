import React from 'react';

export default function Moment(props) {
  const style = {
    height: "600px"
  }
  return (
    <div className="moment" style={style} >
      <div>
        <p>{props.date}</p>
      </div>
      <div>
        <p>{props.text}</p>
      </div>
    </div>
  )
}
