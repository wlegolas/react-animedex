import { Layout } from 'antd';
import React, { Component } from 'react';
import AnimeList from './anime-list';
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
