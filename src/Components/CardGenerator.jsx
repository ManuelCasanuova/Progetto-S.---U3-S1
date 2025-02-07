import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class CardGenerator extends Component {
  state = {
    RemoteFilms: [],
  };

  fetchFilms = () => {
    fetch(`http://www.omdbapi.com/?apikey=1cf214e3&s=${this.props.saga}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((films) => {
        console.log(films);
        this.setState({ RemoteFilms: films.Search });
      })
      .catch((e) => {
        console.log("errore", e);
      });
  };

  componentDidMount() {
    console.log("componentDidMount()");
    this.fetchFilms();
  }

  render() {
    console.log("RENDER");
    return (
      <>
        <h2>{this.props.saga.replace(/\+/g, " ")}</h2>
        <Row xs={1} sm={2} md={4} xl={5} xxl={6} className="mt-4">
          {this.state.RemoteFilms.map((film) => {
            return <SingleFilm key={film.imdbID} film={film} />;
          })}
        </Row>
      </>
    );
  }
}

export default CardGenerator;
