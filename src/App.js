import "./App.css";

import Row from "react-bootstrap/Row";

import NavScroll from "./components/NavScroll";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeadSection from "./sections/HeadSection";
import SkillSection from "./sections/SkillSection";
import TestSection from "./sections/TestSection";
import WorkSection from "./sections/WorkSection";

function App() {
  return (
    <div className="App">
      <NavScroll />

      <div className="chuying-content">
        <Row>
          <TestSection />
        </Row>
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
