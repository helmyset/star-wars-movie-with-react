import React,{Component} from 'react';

// const API = 'https://swapi.co/api/films/';
// const DEFAULT_QUERY = 'redux';

class Planets extends Component {
  constructor(props) {
    super(props);

    this.state = {
      planets: {},
      isLoading: true,
      error: null
    };
  }

  fetchFilms() {
  fetch(`https://swapi.co/api/planets/?format=json`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        planets: data.results,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { isLoading, planets, error } = this.state;
      return (
        <React.Fragment>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              planets.map(planet => {
                const { name } = planet;
                return (
                  <div key={name}>
                    <p>Name: {name}</p>

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

export default Planets;
