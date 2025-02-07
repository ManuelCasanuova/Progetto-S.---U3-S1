import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./Logo";

const CustomNavBar = () => (
  <Navbar expand="lg" className="bg-body-tertiary mb-3" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">
        <Logo src="../src/assets/logo.png" width="100" height="55"></Logo>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link href="#">KIDS</Nav.Link>

          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default CustomNavBar;
