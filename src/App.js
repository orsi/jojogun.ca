import React from 'react';
import './App.scss';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SpotifyContainer from "./spotify-container/SpotifyContainer";
import ShowsContainer from "./shows-container/ShowsContainer";
import VideosContainer from "./videos-container/VideosContainer";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Header></Header>
        {/* <VideosContainer></VideosContainer> */}
        {/* <SpotifyContainer></SpotifyContainer> */}
        {/* <ShowsContainer></ShowsContainer> */}
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
