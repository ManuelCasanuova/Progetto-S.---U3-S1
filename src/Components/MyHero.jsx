import { Container, Dropdown } from "react-bootstrap";
import DropdownTv from "./DropdownTv";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

const MyHero = () => {
  return (
    <Container fluid>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2>TV Shows</h2>
          <DropdownTv />
        </div>
        <div>
          <Grid className="icons" />
          <Grid3x3 className="icons" />
        </div>
      </div>
    </Container>
  );
};
export default MyHero;
