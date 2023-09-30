import Badge from "react-bootstrap/Badge";
import about_data from "../data/en_about.json";
import { Col } from "react-bootstrap";
import Category from "../components/Category";

const AboutSection = () => {
  return (
    <div>
      <h1 id="about">About</h1>
      <Col>
        {about_data.data.map((category) => {
          return <Category data={category} />;
        })}
      </Col>
      <Col></Col>
    </div>
  );
};

export default AboutSection;
