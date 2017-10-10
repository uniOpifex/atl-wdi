import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = () => {
    console.log("Search by Title");
  }

  searchById = () => {
    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  handleTitleChange = (event) => {
    this.setState({titleToSearch: event.target.value})
  }

  handleIdChange = (event) => {
    this.setState({idToSearch: event.target.value})
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
