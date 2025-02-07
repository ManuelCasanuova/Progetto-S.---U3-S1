import { Container } from "react-bootstrap";
import CardGenerator from "./CardGenerator";

const GridGenerator = () => {
  console.log();
  return (
    <Container fluid>
      <CardGenerator saga="Star+Wars" />
      <CardGenerator saga="Lord+of+the+rings" />
      <CardGenerator saga="Batman" />
      {/*<CardGenerator saga="Terminator" /> */}
      {/*<CardGenerator saga="Avenger" /> */}
    </Container>
  );
};
export default GridGenerator;
