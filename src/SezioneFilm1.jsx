import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleFilm from "./Components/SingleFilm";

class SezioneFilm1 extends Component {
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
      <Container>
        <Row xs={1} sm={2} md={4} xl={5} xxl={6} className="mt-4">
          {this.state.RemoteFilms.map((film) => {
            return <SingleFilm key={film.imdbID} film={film} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default SezioneFilm1;
