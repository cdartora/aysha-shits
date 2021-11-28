import React from 'react';
import About from '../img/about.png';
import Work from '../img/work.png';
import Gallery from '../img/gallery.png';
import Trademark from '../img/trademark.png';

export default class Bevel extends React.Component {
  constructor() {
    super();

    this.onHoverHandler = this.onHoverHandler.bind(this);

    this.state = {
      gallery: false,
      work: false,
      about: false,
    }
  }

  onHoverHandler({ target }) {
    const { id : name } = target;
    const gallery = name === 'gallery';
    const work = name === 'work';
    const about = name === 'about';

    this.setState({
      gallery,
      work,
      about,
    });
  }
  
  render() {
    const {
      gallery,
      work,
      about,
    } = this.state
    return (
      <nav>
        <a href="#gallery-section">
          <img
            src={ Gallery }
            onMouseOver={ this.onHoverHandler }
            alt="galeria telúrio"
            className='nav-item'
            id="gallery"
          />
          {
            gallery ? (
              <img src={Trademark} alt="" id="gallery-selected" />
            ) : null
          }
        </a>

        <a href="#work-section">
          <img
            src={ Work }
            onMouseOver={ this.onHoverHandler }
            alt="work"
            className='nav-item'
            id="work"
          />
          {
            work ? (
              <img src={Trademark} alt="" id="work-selected" />
            ) : null
          }
        </a>

        <a href="#about-section">
          <img
            src={ About }
            onMouseOver={ this.onHoverHandler }
            alt="about"
            className='nav-item'
            id="about"
          />
          {
            about ? (
              <img src={Trademark} alt="" id="about-selected" />
            ) : null
          }
        </a>
      </nav>
    )
  }
}