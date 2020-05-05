import React, { Component } from "react";
import './ShowsContainer.scss';

class ShowsContainer extends Component {
  render() {
    return (
      <div className="ShowsContainer">
        <a href="https://www.songkick.com/artists/10130625" 
          className="songkick-widget" 
          data-theme="dark" 
          data-detect-style="true" 
          data-background-color="#000000" 
          data-locale="en">Upcoming Shows</a>
        <script src="//widget.songkick.com/10130625/widget.js"></script>
      </div>
    );
  }
}

export default ShowsContainer;