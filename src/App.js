import React, { Component, Fragment } from 'react';
import { Layout } from 'antd';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AnimeList from 'components/anime-list';
import './App.css';

const { Content } = Layout;

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
        <Content className="x-content">
          <AnimeList />
        </Content>
      </Fragment>
    );
  }
}

export default App;
