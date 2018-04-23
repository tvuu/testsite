import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import logo from './logo.svg';
import cat from './cat.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my React Testsite</h1>
        </header>

        <header className="Video-header">
          <ReactPlayer
            url='https://www.youtube.com/watch?v=Ux8xAuQBdkk'
            playing='true'
            //controls='true'
            loop='true'
            volume='1'
            playbackRate='1'
            width='100%'
            height='100%'
          />
        </header>

        <header className="Cat-header">
          <a href="https://tvuu.github.io/projects.html">
          	<img src={cat} className="Cat-logo" alt="cat" />
          </a>
        </header>
      </div>
    );
  }
}

export default App;
