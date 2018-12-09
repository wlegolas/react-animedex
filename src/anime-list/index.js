import { Card, Col, Input, Pagination, Row } from 'antd';
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
          <Row gutter={16} className="x-anime-list">
            {this.state.animes.data.map(anime => (
              <Col span={8} className="x-anime-list-item">
                <Card key={anime.id} type="inner" title={anime.title}>
                  <label>Created at: </label>
                  <span>{anime.createdAt}</span>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col span={8} offset={8}>
          <Pagination defaultCurrent={1} total={50} />
        </Col>
      </Row>
    );
  }
}

export default AnimeList;
