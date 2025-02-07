import { CardImg, Col } from "react-bootstrap";

const SingleFilm = (props) => {
  return <CardImg src={props.film.Poster} />;
};
export default SingleFilm;
