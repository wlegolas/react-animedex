import { Layout } from 'antd';
import AnimeList from 'components/anime-list';
import React, { Component } from 'react';
import './App.css';

const { Header, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="x-header">
          <h1>Animedex - An easy way to discovery new animes</h1>
        </Header>
        <Content className="x-content">
          <AnimeList />
        </Content>
      </Layout>
    );
  }
}

export default App;
