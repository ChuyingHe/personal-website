import { Row } from "react-bootstrap";
import Boat from "../components/Boat";
import AboutSection from "../sections/AboutSection";
import ContactSection from "../sections/ContactSection";
import SkillSection from "../sections/SkillSection";
import WorkSection from "../sections/WorkSection";
import "./IntroPage.scss";

const IntroPage = () => {
  return (
    <>
      <div className="chuying-content content-below-navscroll">
        <Boat />
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
    </>
  );
};

export default IntroPage;
