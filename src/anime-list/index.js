import React, { Component } from 'react';

class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [
        {
          id: 1,
          name: 'Naruto',
        },
      ],
    };
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
            {this.state.animes.map(anime => (
              <li key={anime.id}>{anime.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default AnimeList;
