import { CardImg, Col } from "react-bootstrap";

const SingleFilm = (props) => {
  return (
    <Col>
      <CardImg
        src={props.film.Poster}
        alt={props.film.Title}
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      />
    </Col>
  );
};
export default SingleFilm;
