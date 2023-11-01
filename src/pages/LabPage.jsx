import gsap from "gsap";
import video from "../asset/beach.mp4";
import umbrella1 from "../asset/umbrella-1.png";
import umbrella2 from "../asset/umbrella-2.png";
import umbrella3 from "../asset/umbrella-3.png";
import umbrella4 from "../asset/umbrella-4.png";
import "./LabPage.scss";

const LabPage = () => {
  //================ 1 ================
  const onDiving = ({ currentTarget }) => {
    // console.log(gsap.utils.random([-1, 1]) * gsap.utils.random(0, 100));
    gsap.to(currentTarget, {
      scale: 0.2,
      x: gsap.utils.random([-1, 1]) * gsap.utils.random(0, 100),
      rotation: gsap.utils.random(-30, 30),
      opacity: gsap.utils.random(0, 0.8),
    });
  };

  const onFloating = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      opacity: gsap.utils.random(0.8, 1),
    });
  };

  //================ 2 ================
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
    <div className="content-below-navscroll">
      <h1>1. Fish: reacting for hover/click</h1>
      <div onMouseEnter={onDiving} onMouseLeave={onFloating}>
        🐟
      </div>

      <h1>2. Beach video with Rotating Umbrella</h1>
      <div className="video-container">
        <div className="umbrellas-container">
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

        <video autoPlay loop muted id="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <h1></h1>
    </div>
  );
};

export default LabPage;
