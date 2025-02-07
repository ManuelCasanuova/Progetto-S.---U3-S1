import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Facebook, Instagram, TwitterX, Youtube } from "react-bootstrap-icons";

const MyFooter = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center mt-5">
        <Col xs={6}>
          <Row>
            <Col className="mb-2">
              <Facebook className="me-2 footer-icon" />
              <Instagram className="me-2 footer-icon" />
              <TwitterX className="me-2 footer-icon" />
              <Youtube className="me-2 footer-icon" />
            </Col>
          </Row>

          <Row xs={1} sm={2} md={4}>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Audio and Subtitles</a>
                  </p>
                  <p>
                    <a href="#">Media Center</a>
                  </p>
                  <p>
                    <a href="#">Privacy</a>
                  </p>
                  <p>
                    <a href="#">Contact us</a>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className="footer-links">
                  <p>
                    <a href="#">Audio Description</a>
                  </p>
                  <p>
                    <a href="#">Investor Relations</a>
                  </p>
                  <p>
                    <a href="#">Legal Notices</a>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col className="col footer-links">
                  <p>
                    <a href="#">Help Center</a>
                  </p>
                  <p>
                    <a href="#">Jobs</a>
                  </p>
                  <p>
                    <a href="#">Cookie Preferences</a>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col className=" footer-links">
                  <p>
                    <a href="#">Gift Cards</a>
                  </p>
                  <p>
                    <a href="#">Terms of Use</a>
                  </p>
                  <p>
                    <a href="#">Corporate Information</a>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className="mb-2">
              <Button variant="outline-secondary" className="btn btn-sm footer-button rounded-0 mt-3">
                Service Code
              </Button>
            </Col>
          </Row>

          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
