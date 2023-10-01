import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

import { ReactComponent as IconLanguage } from "../asset/icon_language.svg";

import "./NavScroll.css";

function NavScroll() {
  return (
    <div>
      <Navbar className="chuying-navbar" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          {/* <Navbar.Brand className="navbar-brand-color" href="#">
          Chuying He's Website
        </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <Nav.Link href="#home">Home</Nav.Link> */}
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skill">Skills</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>

            {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
          </Navbar.Collapse>

          <Dropdown size="sm" align="end">
            <Dropdown.Toggle id="dropdown-basic">
              <IconLanguage id="icon-language" />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">🇬🇧</Dropdown.Item>
              <Dropdown.Item href="#/action-2">🇨🇳</Dropdown.Item>
              <Dropdown.Item href="#/action-3">🇩🇪</Dropdown.Item>
              <Dropdown.Item href="#/action-3">🇪🇸</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScroll;
