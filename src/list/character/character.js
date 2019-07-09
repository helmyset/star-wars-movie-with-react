import React,{Component} from 'react';

// const API = 'https://swapi.co/api/films/';
// const DEFAULT_QUERY = 'redux';

class Character extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: {},
      isLoading: true,
      error: null
    };
  }

  fetchFilms() {
  fetch(`https://swapi.co/api/people/?format=json`)
    .then(response => response.json())
    .then(data =>
      this.setState({
        characters: data.results,
        isLoading: false,
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchFilms();
  }

  render() {
    const { isLoading, characters, error } = this.state;
      return (
        <React.Fragment>
              {error ? <p>{error.message}</p> : null}
              {!isLoading ? (
              characters.map(char => {
                const { name } = char;
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

export default Character;
