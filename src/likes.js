// @format
import React from 'react';

export default function Likes(props) {
  return (
    <button className="like-button" onClick={props.onClick}>
      Likes | &nbsp;
      <span className="like-counter">{props.likes}</span>
    </button>
  );
}
