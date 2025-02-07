import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class CardGenerator extends Component {
  state = {
    RemoteFilms: [],
  };

  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?apikey=1cf214e3&s=Batman")
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
      <Col>
        {this.state.RemoteFilms.map((film) => {
          return <SingleFilm key={film.imdbID} film={film} />;
        })}
      </Col>
    );
  }
}

export default CardGenerator;
