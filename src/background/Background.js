import React, { Component } from "react";
import './Background.scss';
import bales from './bales-1920.jpg';
import joey from './joey-1920.png';
import jon from './jon-1920.png';
import foz from './foz-1920.png';
import bill from './bill-1920.png';

class Background extends Component {

  lastUpdate = new Date().getTime();
  imageElements;
  isGlitching = false;
  currentGlitchElement;
  glitchElements = [];

  componentDidMount() {
    window.addEventListener('resize', this.initBackground);

    this.glitchElements.push(document.querySelector('.background-container'));
    this.glitchElements.push(document.querySelector('.foz'));
    this.glitchElements.push(document.querySelector('.jon'));
    this.glitchElements.push(document.querySelector('.joey'));
    this.glitchElements.push(document.querySelector('.bill'));
    this.update();

    // wait for images to load
    this.imageElements = document.querySelectorAll('img');
    let imagesLoaded = 0;
    this.imageElements.forEach(image => {
      image.addEventListener('load', () => {
        imagesLoaded++;
        if (imagesLoaded === this.imageElements.length) {
          this.initBackground();
        }
      })
    });
  }

  render() {
    return (
      <div className="Background">
        <div className="background-container">
          <div className="scan-lines"></div>
          <div className="distortion"></div>
          
          <img alt="" className="background-bales" src={bales} />
          <div className="background-image-container foz">
            <img alt="" className="image" src={foz} />
            <img alt="" className="glitch red" src={foz} />
            <img alt="" className="glitch blue" src={foz} />
          </div>
          <div className="background-image-container jon">
            <img alt="" className="image" src={jon} />
            <img alt="" className="glitch red" src={jon} />
            <img alt="" className="glitch blue" src={jon} />
          </div>
          <div className="background-image-container joey">
            <img alt="" className="image" src={joey} />
            <img alt="" className="glitch red" src={joey} />
            <img alt="" className="glitch blue" src={joey} />
          </div>
          <div className="background-image-container bill">
            <img alt="" className="image" src={bill} />
            <img alt="" className="glitch red" src={bill} />
            <img alt="" className="glitch blue" src={bill} />
          </div>
        </div>
      </div>
    );
  }

  initBackground() {
    // calculate background size and scale for viewport
    let background = document.querySelector('.background-container');
    let baleImage = document.querySelector('.background-bales');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let windowRatio = windowWidth / windowHeight;
    let backgroundWidth = baleImage.width;
    let backgroundHeight = baleImage.height;
    let backgroundRatio = backgroundWidth / backgroundHeight;

    if (windowRatio > backgroundRatio) {
      // scale by width
      let scale = windowWidth / backgroundWidth;
      // translate Y
      let translateY = (windowHeight - (backgroundHeight * scale)) / 3.4;
      background.style.transform = `scale(${scale})`;
      background.style.top = `${translateY}px`;
      background.style.left = `0`;
    } else {
      // scale by height
       let scale = windowHeight / backgroundHeight;
       let backgroundWidthScaled = backgroundWidth * scale;
       let backgroundWidthOutOfView = backgroundWidthScaled - windowWidth;
      // translate background image to focal center
      let translateX = backgroundWidthOutOfView / 2 * 1.249;
      background.style.transform = `scale(${scale})`;
      background.style.top = `0`;
      background.style.left = `-${translateX}px`;
    }

    background.classList.add('show');
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