import React, { Component } from 'react';


// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
class Movie extends Component {
  render() {
  return (
    <div id="movie-listing">
      <div className="movie">
        <h3>{this.props.title}</h3>
        <p>
          <strong>Released:</strong>{this.props.released}<br />
          <strong>Directed By:</strong>{this.props.director}<br />
          <em>Genre: {this.props.genre}</em>
        </p>
        <p>{this.props.Plot}</p>
        <div>
        <img src={this.props.poster} alt='' />
        </div>
      </div>
    </div>
  );
}
};


export default Movie;


