import React, { Component } from "react";
import './Background.scss';
import bales from './bales-1920.jpg';
import joey from './joey-1920.png';
import jon from './jon-1920.png';
import foz from './foz-1920.png';
import bill from './bill-1920.png';

class Background extends Component {

  componentDidMount() {
    this.setBackground();
    this.glitch();

    window.addEventListener('resize', this.setBackground);
  }

  render() {
    return (
      <div className="Background">
        <div className="background-container">
          
          <img className="background-bales" src={bales} />
          <div className="background-image-container joey">
            <img className="image" src={joey} />
          </div>
          <div className="background-image-container jon">
            <img className="image" src={jon} />
          </div>
          <div className="background-image-container foz">
            <img className="image" src={foz} />
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

    background.style.transformOrigin = `top left`;
    background.style.transform = `scale(${scale}) translate(${translateX}px,${translateY}px)`;
  }

  glitch() {
    // let bill = document.querySelector('.background-bill');
    // let copy = bill.cloneNode();
    // console.log(bill, copy);

    // bill.parentNode.insertBefore(copy, bill);
    // copy.style.
  }
}

export default Background;