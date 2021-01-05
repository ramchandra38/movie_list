
import React, { Component } from 'react';
import "./index.css";

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      input: ''
    };

    //Bind Events
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  //handleChange
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  //onSubmit
  onSubmit() {
    const url = 'https://jsonmock.hackerrank.com/api/movies?Year=' + this.state.input;
    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.setState({
          movies: res.data,
        });
      });
  }

 // render HTML
  render() {
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="number" className="large" placeholder="Enter Year eg 2015" onChange={this.handleChange} data-testid="app-input" />
          <button className="" data-testid="submit-button" onClick={this.onSubmit}>Search</button>
        </section>
        <ul className="mt-50 styled" data-testid="movieList">
          {this.state.movies.map((movie) => {
            return <li key={movie.imdbID} className="slide-up-fade-in py-10">{movie.Title}</li>
          })}
        </ul>
        {this.state.movies.length == 0 &&
          <div className="mt-50 slide-up-fade-in" data-testid="no-result">No Results </div>
        }
      </div>
    );
  }
}

export default MovieList