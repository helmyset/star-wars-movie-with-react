import React,{Component} from 'react';

class Select extends Component {
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

  handleChange(event) {
       this.setState({value: event.target.data});
     }

  render() {
    const {  films } = this.state;
      return (
        <React.Fragment>
          <div >
              <select className="select" value={this.state.value} onChange={this.handleChange}>
                {
                  (films && films.length > 0) && films.map((film) => {
                   return (<option value="${film.value}">{film.title}</option>);
                  })
                 }
               </select>
          </div>

        </React.Fragment>
      );
    }

}

export default Select;
