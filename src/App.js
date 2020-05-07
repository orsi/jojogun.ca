import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SpotifyContainer from "./spotify-container/SpotifyContainer";
import ShowsContainer from "./shows-container/ShowsContainer";
import VideosContainer from "./videos-container/VideosContainer";
import Background from './background/Background';

function App() {
  return (
    <div className="App">
      <Background></Background>
    </div>
  );
}

export default App;
