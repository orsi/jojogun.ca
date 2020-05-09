import React, { Component } from "react";
import './Background.scss';
import bales from './bales-1920.jpg';
import joey from './joey-1920.png';
import jon from './jon-1920.png';
import foz from './foz-1920.png';
import bill from './bill-1920.png';

class Background extends Component {

  lastUpdate = new Date().getTime();
  isGlitching = false;
  currentGlitchElement;
  glitchElements = [];

  componentDidMount() {
    this.setBackground();
    window.addEventListener('resize', this.setBackground);

    this.glitchElements.push(document.querySelector('.background-container'));
    this.glitchElements.push(document.querySelector('.foz'));
    this.glitchElements.push(document.querySelector('.jon'));
    this.glitchElements.push(document.querySelector('.joey'));
    this.glitchElements.push(document.querySelector('.bill'));
    this.update();
  }

  render() {
    return (
      <div className="Background">
        <div className="background-container">
          
          <img className="background-bales" src={bales} />
          <div className="background-image-container foz">
            <img className="image" src={foz} />
            <img className="glitch red" src={foz} />
            <img className="glitch blue" src={foz} />
          </div>
          <div className="background-image-container jon">
            <img className="image" src={jon} />
            <img className="glitch red" src={jon} />
            <img className="glitch blue" src={jon} />
          </div>
          <div className="background-image-container joey">
            <img className="image" src={joey} />
            <img className="glitch red" src={joey} />
            <img className="glitch blue" src={joey} />
          </div>
          <div className="background-image-container bill">
            <img className="image" src={bill} />
            <img className="glitch red" src={bill} />
            <img className="glitch blue" src={bill} />
          </div>
        </div>
      </div>
    );
  }

  setBackground() {
    // calculate background size and scale for viewport
    let background = document.querySelector('.background-container');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let backgroundWidth = 1920;
    let backgroundHeight = 1280;
    let backgroundRatio = backgroundWidth / backgroundHeight;

    let scale;
    let translateX = 0;
    let translateY = 0;
    if (windowRatio > backgroundRatio) {
      // scale by width
      scale = windowWidth / backgroundWidth;
      // translate Y
      translateY = (windowHeight - (backgroundHeight * scale)) / 3.4;
    } else {
      // scale by height
      scale = windowHeight / backgroundHeight;
      // translate X
      translateX = (windowWidth - (backgroundWidth * scale)) * 1.11;
    }

    background.style.transformOrigin = `top left`;
    background.style.transform = `scale(${scale}) translate(${translateX}px,${translateY}px)`;
  }

  update() {
    let now = new Date().getTime();
    let delta = now - this.lastUpdate;

    // every second, test if we should continue or stop glitch
    if (delta > 1000) {
      if (this.isGlitching) {
        // currently glitching
        // see if we should stop glitching
        let shouldStopGlitch = Math.random() < .5;
        if (shouldStopGlitch) {
          // remove all glitch animations
          this.currentGlitchElement.classList.remove('invert-animation');
          this.currentGlitchElement.classList.remove('hide-animation');
          this.currentGlitchElement.classList.remove('blend-animation');
          this.currentGlitchElement.classList.remove('blur-animation');
          this.currentGlitchElement.classList.remove('clip-animation');
          this.isGlitching = false;
        }
      } else {
        // no glitch effect currently
        // attempt to glitch
        let shouldGlitch = Math.random() < .2;
        if (shouldGlitch) {
          // select random element to glitch
          let randIndex = Math.floor(Math.random() * this.glitchElements.length);
          this.currentGlitchElement = this.glitchElements[randIndex];

          // select random glitch animation
          let randGlitchAnimation = Math.floor(Math.random() * 5);
          switch (randGlitchAnimation) {
            case 0:
              this.currentGlitchElement.classList.add('invert-animation');
              break;
            case 1:
              this.currentGlitchElement.classList.add('hide-animation');
              break;
            case 2:
              this.currentGlitchElement.classList.add('blend-animation');
              break;
            case 3:
              this.currentGlitchElement.classList.add('blur-animation');
              break;
            case 4:
              this.currentGlitchElement.classList.add('clip-animation');
              break;
          }
          this.isGlitching = true;
        }
      }

      this.lastUpdate = now;
    }

    requestAnimationFrame(this.update.bind(this));
  }
}

export default Background;