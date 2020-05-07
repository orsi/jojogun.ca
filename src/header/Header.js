import React, { Component } from "react";
import './Header.scss';
import SocialMediaList from "../social-media-list/SocialMediaList";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1 className="title">
          <div className="title-container">
          <div className="title-jojo">JoJo Gun</div>
          <div className="title-and">&</div>
          <div className="title-the-bullets">
            <div className="title-the">the</div>
            <div className="title-bullets">Bullets</div>
            <SocialMediaList></SocialMediaList>
          </div>
          </div>
        </h1>
      </header>
    );
  }
}

export default Header;