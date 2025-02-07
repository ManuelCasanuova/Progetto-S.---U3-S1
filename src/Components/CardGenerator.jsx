import { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class CardGenerator extends Component {
  state = {
    RemoteFilms: [],
    Caricamento: false,
  };

  fetchFilms = () => {
    this.setState({ Caricamento: true });
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
        this.setState({ RemoteFilms: films.Search, Caricamento: false });
      })
      .catch((e) => {
        console.log("errore", e);
        this.setState({ Caricamento: false });
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
        <h4 className="my-2">{this.props.saga.replace(/\+/g, " ")}</h4>
        {this.state.Caricamento && (
          <Spinner animation="grow" role="status" variant="danger" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Row xs={1} sm={2} md={6} className=" g-4">
          {this.state.RemoteFilms.slice(0, 6).map((film) => {
            return <SingleFilm key={film.imdbID} film={film} />;
          })}
        </Row>
      </>
    );
  }
}

export default CardGenerator;
