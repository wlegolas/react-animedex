import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AnimeList from 'components/anime-list';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="x-anime-header">
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" color="inherit" className="x-anime-header--title">
                Animedex - An easy way to discovery new animes
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <main className="x-content">
          <AnimeList />
        </main>
      </Fragment>
    );
  }
}

export default App;
