import logo from "./logo.svg";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavScroll from "./components/NavScroll";
import HeadSection from "./sections/HeadSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import WorkSection from "./sections/WorkSection";
import ContactSection from "./sections/ContactSection";
import Blog from "./sections/BlogSection";

function App() {
  return (
    <div className="App">
      <NavScroll />

      <div className="chuying-content">
        <Row>
          <HeadSection />
        </Row>
        <Row>
          <AboutSection />
        </Row>
        <Row>
          <SkillSection />
        </Row>
        <Row>
          <WorkSection />
        </Row>
        <Row>
          <ContactSection />
        </Row>
      </div>
    </div>
  );
}

export default App;

{
  /* TODO: make this only accessable by entering the url */
}
