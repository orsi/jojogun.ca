import React, { Component } from "react";
import './Header.scss';
import SocialMediaList from "../social-media-list/SocialMediaList";

class Header extends Component {

  lastUpdate = new Date().getTime();
  isGlitching = false;
  currentGlitchElement;
  glitchElements = [];

  componentDidMount() {
    console.log(this);
    this.glitchElements.push(document.querySelector('.title-jojo'));
    this.glitchElements.push(document.querySelector('.title-and'));
    this.glitchElements.push(document.querySelector('.title-the'));
    this.glitchElements.push(document.querySelector('.title-bullets'));
    this.update();
  }
  render() {
    return (
      <header className="Header">
        <h1 className="title">
          <div className="title-container">
          <div className="title-jojo"
            data-text="JoJo Gun">JoJo Gun</div>
          <div className="title-and"
            data-text="&">&</div>
          <div className="title-the-bullets">
            <div className="title-the"
              data-text="the">the</div>
            <div className="title-bullets"
              data-text="Bullets">Bullets</div>
          </div>
          </div>
        </h1>
        <SocialMediaList></SocialMediaList>
      </header>
    );
  }
  update() {
    let now = new Date().getTime();
    let delta = now - this.lastUpdate;

    // every second, test if we should continue or stop glitch
    if (delta > 1000) {
      if (this.isGlitching) {
        // currently glitching
        // see if we should stop glitching
        let shouldStopGlitch = Math.random() < .6;
        if (shouldStopGlitch) {
          // remove glitch animation
          this.currentGlitchElement.classList.remove('is-animating');
          this.isGlitching = false;
        }
      } else {
        // no glitch effect currently
        // attempt to glitch
        let shouldGlitch = Math.random() < .15;
        if (shouldGlitch) {
          // select random element to glitch
          let randIndex = Math.floor(Math.random() * this.glitchElements.length);
          this.currentGlitchElement = this.glitchElements[randIndex];
          this.currentGlitchElement.classList.add('is-animating');
          this.isGlitching = true;
        }
      }

      this.lastUpdate = now;
    }

    requestAnimationFrame(this.update.bind(this));
  }
}

export default Header;