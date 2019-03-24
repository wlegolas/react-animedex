import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
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
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <Paper className="x-anime-grid--row" elevation={3}>
              <div className="x-search">
                <Input.Search
                  className="x-search-field"
                  placeholder="Search your favorite anime"
                  enterButton="Search"
                  size="large"
                  onSearch={this.handleSearch}
                />
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className="x-anime-grid--row" elevation={3}>xs=12</Paper>
          </Grid>
        </Grid>
        <hr />
        <Row>
          <Col span={24}>
            <Row className="x-anime-list">
              {this.state.animes.data.map(anime => (
                <Col key={anime.get('id')} span={24} className="x-anime-list-item">
                  <Card type="inner" className="x-anime-container">
                    <Row gutter={0} type="flex" justify="left" align="top">
                      <Col xs={24} lg={24}>
                        <img src={anime.get('image')} alt={`Anime ${anime.get('title')} poster`} />
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
          <Col xs={24} lg={24} className="x-anime-list-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default AnimeList;
