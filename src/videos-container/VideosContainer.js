import React, { Component } from "react";
import './VideosContainer.scss';

class VideosContainer extends Component {
  render() {
    return (
      <div className="VideosContainer">
        <div className="iframe-container">
          <iframe className="iframe-video"
            src="https://www.youtube.com/embed/e8wu9no4Mg8" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
      </div>
    );
  }
}

export default VideosContainer;