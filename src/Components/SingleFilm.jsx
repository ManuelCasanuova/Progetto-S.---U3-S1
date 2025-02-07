import { CardImg, Col } from "react-bootstrap";

const SingleFilm = (props) => {
  return (
    <Col>
      <CardImg src={props.film.Poster} />
    </Col>
  );
};
export default SingleFilm;
