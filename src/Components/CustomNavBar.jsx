import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./Logo";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

const CustomNavBar = () => (
  <Navbar expand="lg" className="mb-2 navbar navbar-expand-lg bg-dark" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">
        <Logo src="../src/assets/logo.png" width="100" height="55"></Logo>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="fw-bold active" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="fw-bold" href="#">
            TV Shows
          </Nav.Link>
          <Nav.Link className="fw-bold" href="#">
            Movies
          </Nav.Link>
          <Nav.Link className="fw-bold" href="#">
            Recently Added
          </Nav.Link>
          <Nav.Link className="fw-bold" href="#">
            My List
          </Nav.Link>
        </Nav>
        <Nav className="d-flex ms-auto align-items-center">
          <Nav.Link href="#">
            <Search className="icons" />
          </Nav.Link>
          <Nav.Link id="kids" href="#">
            KIDS
          </Nav.Link>
          <Nav.Link href="#">
            <Bell className="icons" />
          </Nav.Link>

          <Nav.Link href="#">
            <PersonCircle className="icons" />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavBar;
