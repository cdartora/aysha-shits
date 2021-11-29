import React from 'react';
import strip from '../img/strip.png';

export default class Strip extends React.Component {
  render() {
    return (
      <div className="strip-container">
        <div className="ticker">
          <p>
            galeria telúrio is out now. every print is available for sale. for more contact: @ayshalab
          </p>
          </div>
        <img src={ strip } alt="" className="strip" />
      </div>
    )
  }
}