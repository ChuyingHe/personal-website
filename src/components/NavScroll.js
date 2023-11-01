import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { useTranslation } from "react-i18next";
import { ReactComponent as IconLanguage } from "../asset/icon_language.svg";

import "./NavScroll.css";

function NavScroll() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

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
              <Nav.Link href="#about">
                {t("internalization.section_1")}
              </Nav.Link>
              <Nav.Link href="#skill">
                {t("internalization.section_2")}
              </Nav.Link>
              <Nav.Link href="#works">
                {t("internalization.section_3")}
              </Nav.Link>
              <Nav.Link href="#contact">
                {t("internalization.section_4")}
              </Nav.Link>
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

            <Dropdown.Menu size="sm" align="end">
              <Dropdown.Item onClick={() => changeLanguage("en")}>
                🇬🇧 English
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("de")}>
                🇩🇪 Deutsch
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("cn")}>
                🇨🇳 中文
              </Dropdown.Item>
              <Dropdown.Item onClick={() => changeLanguage("es")}>
                🇪🇸 Español
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScroll;
