import { Card, Col, Input, Pagination, Row } from 'antd';
import React, { Component } from 'react';
import { getAnimes, searchAnimes } from 'services/anime';

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
    getAnimes().then(this.onRequestAnimesSuccess);
  }

  handleSearch = value => {
    searchAnimes(value).then(this.onRequestAnimesSuccess);
  };

  onRequestAnimesSuccess = animes => {
    this.setState({ animes });
  }

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
              <Col key={anime.get('id')} span={24} className="x-anime-list-item">
                <Card type="inner" className="x-anime-container">
                  <Row gutter={0} type="flex" justify="center" align="top">
                    <Col xs={24} lg={8}>
                      <img src={anime.get('image')} alt={`Anime ${anime.get('title')} poster`} />
                    </Col>
                    <Col xs={24} lg={16}>
                      <div className="x-anime-details">
                        <h2>Anime details</h2>
                        <div className="x-anime-info">
                          <label>Title: </label>
                          <span>{anime.get('title')}</span>
                        </div>
                        <div className="x-anime-info">
                          <label>Status: </label>
                          <span>{anime.get('status')}</span>
                        </div>
                        <div className="x-anime-info">
                          <label>Created at: </label>
                          <span>{anime.get('createdAt')}</span>
                        </div>
                        <div className="x-anime-info">
                          <label>Synopsis: </label>
                          <span>{anime.get('synopsis')}</span>
                        </div>
                      </div>
                    </Col>
                  </Row>
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
