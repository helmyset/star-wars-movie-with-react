import React,{Component} from 'react';

// const API = 'https://swapi.co/api/films/';
// const DEFAULT_QUERY = 'redux';

class Starships extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starships: {},
      isLoading: true,
      error: null
    };
  }

  fetchFilms() {
  fetch(`https://swapi.co/api/starships/?format=json`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        starships: data.results,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { isLoading, starships, error } = this.state;
      return (
        <React.Fragment>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              starships.map(starship => {
                const { name } = starship;
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

export default Starships;
