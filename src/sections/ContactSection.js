import "./ContactSection.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import gsap from "gsap";

import umbrella1 from "../asset/umbrella-1.png";
import umbrella2 from "../asset/umbrella-2.png";
import umbrella3 from "../asset/umbrella-3.png";
import umbrella4 from "../asset/umbrella-4.png";

const ContactSection = () => {
  // Add dots to the beach sand
  const sand_dots_num = 100;
  const SandDots = [];

  for (let i = 0; i < sand_dots_num; i++) {
    SandDots.push(<span key={i} className="dot"></span>);
  }

  // Add iteractive animations to the umbrellas
  const onUmbrellaRotate = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      rotate: 90,
    });
  };

  const onUmbrellaRevert = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      rotate: -90,
      delay: 0.1,
    });
  };

  return (
    <div id="contact-section">
      <h1>Contact</h1>

      <div id="contact-sand-dots-container">{SandDots}</div>

      <div id="contact-umbrellas-container">
        <img
          src={umbrella1}
          width="60px"
          className="umbrella"
          onMouseEnter={onUmbrellaRotate}
          onMouseLeave={onUmbrellaRevert}
        />
        <img
          src={umbrella2}
          width="80px"
          className="umbrella"
          onMouseEnter={onUmbrellaRotate}
          onMouseLeave={onUmbrellaRevert}
        />
        <img
          src={umbrella3}
          width="60px"
          className="umbrella"
          onMouseEnter={onUmbrellaRotate}
          onMouseLeave={onUmbrellaRevert}
        />
        <img
          src={umbrella4}
          width="60px"
          className="umbrella"
          onMouseEnter={onUmbrellaRotate}
          onMouseLeave={onUmbrellaRevert}
        />
      </div>

      <div id="contact-formula">
        <Form>
          <Form.Group className="mb-3" controlId="form.email">
            <Form.Label>Your E-mail</Form.Label>
            <Form.Control type="email" placeholder="john.doe@gmail.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="form.text">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Hello World" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="form.check">
            <Form.Check
              type="checkbox"
              label="* I agree to provide the typed information above."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactSection;
