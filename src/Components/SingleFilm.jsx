import { CardImg, Col } from "react-bootstrap";

const SingleFilm = (props) => {
  return (
    <Col>
      <CardImg src={props.film.Poster} alt={props.film.Title} />
    </Col>
  );
};
export default SingleFilm;
