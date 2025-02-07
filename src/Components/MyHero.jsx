import { Container, Dropdown } from "react-bootstrap";
import DropdownTv from "./DropdownTv";

const MyHero = () => (
  <Container fluid>
    <div className="d-flex justify-content-between">
      <div className="d-flex">
        <h2>TV Shows</h2>
        <DropdownTv />
      </div>
      <div></div>
    </div>
  </Container>
);
export default MyHero;
