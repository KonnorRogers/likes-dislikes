import React from 'react';

export default function dislikes(props) {
  return (
    <button className="dislike-button" onClick={props.onClick}>
      Dislikes | &nbsp;
      <span className="dislike-counter">{props.dislikes}</span>
    </button>
  );
}
