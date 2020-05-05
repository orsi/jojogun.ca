import React, { Component } from "react";
import './SocialMediaList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBandcamp } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

class SocialMediaList extends Component {
  render() {
    return (
      <div className="SocialMediaList">
        <ul>
          <li>
            <a target="_blank"
            href="https://www.facebook.com/jojogunandthebullets/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a target="_blank"
            href="https://www.instagram.com/jojogunandthebullets/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a target="_blank"
            href="https://jojogun.bandcamp.com/">
              <FontAwesomeIcon icon={faBandcamp} />
            </a>
          </li>
          <li>
            <a target="_blank"
            href="https://open.spotify.com/artist/6FavMhIklkpnPvpF1BCBTw">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
          </li>
          <li>
            <a target="_blank"
            href="https://music.apple.com/us/artist/jojo-gun-the-bullets/1273330845">
              <FontAwesomeIcon icon={faApple} />
            </a>
          </li>
          <li>
            <a href="mailto:info@jojogun.ca">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialMediaList;