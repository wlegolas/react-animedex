import { Col, Input, Row } from 'antd';
import React, { Component } from 'react';
import { getAnimes } from '../services/animeService';

class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: {
        data: [],
      },
    };
  }

  componentDidMount() {
    getAnimes().then(animes => {
      this.setState({ animes });
    });
  }

  handleSearch = event => {
    console.log('Test');
  };

  render() {
    return (
      <Row>
        <Col span={24}>
          <div className="x-search">
            <Input.Search
              className="x-search-field"
              placeholder="Search your favorite anime"
              onSearch={this.handleSearch}
            />
          </div>
        </Col>
        <Col span={24}>
          <div className="x-anime-list">
            <ul>
              {this.state.animes.data.map(anime => (
                <li key={anime.id}>{anime.title}</li>
              ))}
            </ul>
            <p>Total items: {this.state.animes.totalItems}</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default AnimeList;
