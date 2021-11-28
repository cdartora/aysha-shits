import React from 'react';
import note from '../img/note.png';

export default class Note extends React.Component {
  render() {
    return (
      <div>
        <img src={ note } alt="" className="note" />
      </div>
    )
  }
}