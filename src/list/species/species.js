import React,{Component} from 'react';

// const API = 'https://swapi.co/api/films/';
// const DEFAULT_QUERY = 'redux';

class Species extends Component {
  constructor(props) {
    super(props);

    this.state = {
      species: {},
      isLoading: true,
      error: null
    };
  }

  fetchFilms() {
  fetch(`https://swapi.co/api/species/?format=json`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        species: data.results,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { isLoading, species, error } = this.state;
      return (
        <React.Fragment>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              species.map(specie => {
                const { name } = specie;
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

export default Species;
