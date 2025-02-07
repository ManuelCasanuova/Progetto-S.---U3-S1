import { Component } from "react";
import { Container } from "react-bootstrap";

class SezioneFilm1 extends Component {
  state = {
    RemoteFilms: [],
  };

  fetchFilms = () => {
    fetch("http://www.omdbapi.com/?apikey=1cf214e3&s=Spiderman")
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("errore nella chiamata");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ RemoteFilms: data.Search });
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
    return <Container></Container>;
  }
}

export default SezioneFilm1;
