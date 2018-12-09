import React, { Component } from 'react';
import { getAnimes } from '../services/animeService';

class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: {
        data: []
      }
    };
  }

  componentDidMount() {
    getAnimes().then(animes => {
      this.setState({ animes })
    });
  }

  handleSearch = event => {
    console.log('Test');
  };

  render() {
    return (
      <div className="x-content">
        <div className="x-search">
          <input
            type="text"
            placeholder="Fill the name of your favorite anime and press ENTER"
            onKeyUp={this.handleSearch}
          />
        </div>
        <div className="x-anime-list">
          <ul>
            {this.state.animes.data.map(anime => (
              <li key={anime.id}>{anime.title}</li>
            ))}
          </ul>
          <p>Total items: {this.state.animes.totalItems}</p>
        </div>
      </div>
    );
  }
}

export default AnimeList;
