import React from 'react';
import strip from '../img/strip.png';

export default class Strip extends React.Component {
  render() {
    return (
      <div>
        <img src={ strip } alt="" className="strip" />
      </div>
    )
  }
}