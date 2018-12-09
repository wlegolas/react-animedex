import React, { Component } from 'react';

class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="x-anime-list">
        <div className="x-search">
          <h2>Search</h2>
        </div>
      </div>
    );
  }
}

export default AnimeList;
