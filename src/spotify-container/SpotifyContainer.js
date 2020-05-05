import React, { Component } from "react";
import './SpotifyContainer.scss';

class SpotifyContainer extends Component {
  render() {
    return (
      <div className="SpotifyContainer">
       <div className="spotify-container">
       <iframe className="spotify-iframe"
        src="https://open.spotify.com/embed/artist/6FavMhIklkpnPvpF1BCBTw" 
        width="300" 
        height="380" 
        frameBorder="0" 
        allowtransparency="true" 
        allow="encrypted-media"></iframe>
       </div>
      </div>
    );
  }
}

export default SpotifyContainer;