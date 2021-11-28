import React from 'react';
import { Parallax } from 'react-parallax';
import ball from '../img/ball.png';
import hero from '../img/hero.png';

export default class Jittering extends React.Component {
  render() {
    return (
      <div className="jittering">

        <Parallax
          bgImage={ ball }
          strength={ 300 }
          bgImageStyle={ {
            height: '85vh',
            width: '85vw',
          } }
          contentClassName="hero-title"
          >

            <div style={{height: '100vh'}}>
              <img
                src={ hero }
                alt="aysha lab"
                style={ { margin: 'auto', width: '40vw', } }
              />
            </div>

        </Parallax>

      </div>
    )
  }
}