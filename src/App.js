import React, { Component } from 'react';
import AnimeList from './anime-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="x-app">
        <header className="x-header">
          <h1>Animedex - An easy way to discovery new animes</h1>
        </header>
        <AnimeList />
      </div>
    );
  }
}

export default App;
