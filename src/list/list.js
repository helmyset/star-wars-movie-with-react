import React,{Component} from 'react';
import Character from './character/character.js';
import Planets from './planet/planet.js';
import Species from './species/species.js';
import Starships from './starship/starship.js';
import Vehicles from './vehicles/vehicles.js';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: {},
      isLoading: true,
      error: null
    };
  }

  fetchFilms() {
  fetch(`https://swapi.co/api/films/?format=json`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        films: data.results,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { isLoading, films, error } = this.state;
      return (
        <React.Fragment>
            <h1>Star Wars</h1>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              films.map(film => {
                const { title, episode_id, director, producer, release_date } = film;
                return (
                  <div key={title}>
                    <p>Tittle: {title}</p>
                    <p>episode id: {episode_id}</p>
                    <p>director: {director}</p>
                    <p>producer: {producer}</p>
                    <p>release date: {release_date}</p>
                    <p>caracter: <Character /></p>
                    <p>planet: <Planets /></p>
                    <p>starships: <Starships /></p>
                    <p>vehicles: <Vehicles /></p>
                    <p>species: <Species /></p>
                    <hr />
                  </div>
                );
              })
              ) : (
              <h3>Loading...</h3>
              )}

        </React.Fragment>
      );
    }

}

export default List;
