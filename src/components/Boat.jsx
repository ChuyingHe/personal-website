// Boat.js
import React, { useEffect, useState } from "react";
import "./Boat.scss";
import boat from "../asset/boat.png";

const Boat = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="boat" style={{ transform: `translateY(${scrollY}px)` }}>
      <img src={boat} alt="Boat" />
    </div>
  );
};

export default Boat;
