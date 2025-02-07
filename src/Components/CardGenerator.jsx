import { Component } from "react";
import { Row, Spinner } from "react-bootstrap";
import SingleFilm from "./SingleFilm";

class CardGenerator extends Component {
  state = {
    remoteFilms: [],
    caricamento: false,
  };

  fetchFilms = () => {
    this.setState({ caricamento: true });
    fetch(`http://www.omdbapi.com/?apikey=1cf214e3&s=${this.props.saga}`)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nella chiamata");
        }
      })
      .then((films) => {
        //console.log(films);
        this.setState({ remoteFilms: films.Search, caricamento: false });
      })
      .catch((e) => {
        console.log("errore", e);
        this.setState({ caricamento: false });
      });
  };

  componentDidMount() {
    //console.log("componentDidMount()");
    this.fetchFilms();
  }

  render() {
    //console.log("RENDER");
    return (
      <>
        <h4 className="my-2">{this.props.saga.replace(/\+/g, " ")}</h4>
        {this.state.caricamento && (
          //Inserito qui lo spinner per ogni griglia che si andrà a creare

          <Spinner animation="grow" role="status" variant="danger" className="d-block mx-auto">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        <Row xs={1} sm={2} md={6} className=" g-4">
          {this.state.remoteFilms.slice(0, 6).map((film) => {
            return <SingleFilm key={film.imdbID} film={film} />;
          })}
        </Row>
      </>
    );
  }
}

export default CardGenerator;
