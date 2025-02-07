import { CardImg, Col } from "react-bootstrap";
import CardGenerator from "./CardGenerator";

const GridGenerator = () => {
  return (
    <Container>
      <Row xs={1} sm={2} md={4} xl={5} xxl={6} className="mt-4">
        <CardGenerator />
      </Row>
    </Container>
  );
};
export default SingleFilm;
