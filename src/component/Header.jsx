import React, { useState } from "react";
import {
  Row,
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import LoginModal from "./LoginModal"; // Đảm bảo đường dẫn chính xác

const Header = ({ handleShow, count }) => {
  const [showLogin, setShowLogin] = useState(false);
  const handleLoginShow = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="primary">Search</Button>
            </Form>
            <Button className="ms-2" variant="primary" onClick={handleShow}>
              Cart <Badge bg="secondary">{count}</Badge>
              <span className="visually-hidden">items in cart</span>
            </Button>
            <Button className="ms-2" variant="outline-primary" onClick={handleLoginShow}>
              <FontAwesomeIcon icon={faUser} /> Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal Đăng Nhập */}
      <LoginModal show={showLogin} handleClose={handleLoginClose} />
    </Row>
  );
};

export default Header;