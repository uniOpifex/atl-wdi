import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json';
import axios from 'axios';

class App extends Component {
  state = {
    title: '',
    id: '',
    year: '',
    director: '',
    genre: '',
    plot: ''
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server


  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  searchByTitle = (event) => {
    event.preventDefault()
    const title = event.target.title.value
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94=${title}`)
      .then( (response) => {
        this.setState({ 
          title: response.data.Title,
          year: response.data.Year,
          director: response.data.Director,
          genre: response.data.Genre,
          plot: response.data.Plo
        });
        console.log(event);
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  searchById = (event) => {
    axios.get(`http://www.omdbapi.com/?apikey=d31f1a94=${this.state.idToSearch}`)
      .then( (response) => {
        this.setState({
        title: response.data.Title,
        year: response.data.Year,
        director: response.data.Director,
        genre: response.data.Genre,
        plot: response.data.Plot
       });
        console.log(event);
      })
      .catch( (error) => {
        console.log(error);
      })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search searchByTitle={this._searchByTitle} 
          searchById={this._searchById}
          titleToSearch={this.state.titleToSearch}
          idToSearch={this.state.idToSearch}
          handleTitleChange={this._handleTitleChange}
          handleIdChange={this._handleIdChange} />
        <Movie movie={this.state.movie} />
      </div>
    );
  }

}

export default App;
