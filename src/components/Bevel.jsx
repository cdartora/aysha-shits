import React from 'react';
import edge from '../img/edge.png';

export default class Bevel extends React.Component {
  render() {
    return (
      <div>
        <div className="right"></div>
        <img src={ edge } alt="" id="top-right" />
        <div className="left"></div>
        <img src={ edge } alt="" id="top-left" />
        <div className="top"></div>
        <img src={ edge } alt="" id="bot-right" />
        <div className="bot"></div>
        <img src={ edge } alt="" id="bot-left" />
      </div>
    )
  }
}