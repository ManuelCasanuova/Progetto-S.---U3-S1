import { CardImg, Col } from "react-bootstrap";

const SingleFilm = (props) => {
  return (
    <Col>
      <CardImg
        src={props.film.Poster}
        alt={props.film.Title}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}

        //Ho fissato le immagini a dimensioni tali da vedere le locandine
        //per la loro interezza. Non mi piaceva assolutamente vederle tagliate.
        //Per rispettare il mockup avrei potuto riddure la Height
      />
    </Col>
  );
};
export default SingleFilm;
