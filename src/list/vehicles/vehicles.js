import React,{Component} from 'react';

// const API = 'https://swapi.co/api/films/';
// const DEFAULT_QUERY = 'redux';

class Vehcles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicles: {},
      isLoading: true,
      error: null
    };
  }

  fetchFilms() {
  fetch(`https://swapi.co/api/vehicles/?format=json`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        vehicles: data.results,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { isLoading, vehicles, error } = this.state;
      return (
        <React.Fragment>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              vehicles.map(vehi => {
                const { name } = vehi;
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

export default Vehcles;
