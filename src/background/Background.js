import React, { Component } from "react";
import './Background.scss';
import bales from './bales-1920.jpg';
import joey from './joey-1920.png';
import jon from './jon-1920.png';
import foz from './foz-1920.png';
import bill from './bill-1920.png';

class Background extends Component {

  setBackground() {
    // calculate background size and scale for viewport
    let background = document.querySelector('.background-container');
    let balesImage = document.querySelector('.background-bales');
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

    console.log(translateX, translateY);
    background.style.transformOrigin = `top left`;
    background.style.transform = `scale(${scale}) translate(${translateX}px,${translateY}px)`;
  }

  componentDidMount() {
    this.setBackground();

    window.addEventListener('resize', this.setBackground);
  }

  render() {
    return (
      <div className="Background">
        <div className="background-container">
          <img className="background-bales" src={bales} />
          <img className="background-joey" src={joey} />
          <img className="background-jon" src={jon} />
          <img className="background-foz" src={foz} />
          <img className="background-bill" src={bill} />
        </div>
      </div>
    );
  }
}

export default Background;