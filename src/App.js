import logo from "./logo.svg";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavScroll from "./components/NavScroll";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Blog from "./sections/Blog";

function App() {
  return (
    <div className="App">
      <NavScroll />

      <div className="chuying-content">
        <Row>
          <AboutMe />
        </Row>
        <Row>
          <Blog />
        </Row>
        <Row>
          <ContactMe />
        </Row>
      </div>
    </div>
  );
}

export default App;
