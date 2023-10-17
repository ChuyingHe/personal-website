// Boat.js
import React, { useEffect, useState } from "react";
import "./Boat.scss";
import boat from "../asset/boat.png";

const Boat = () => {
  const [scrollY, setScrollY] = useState(0);
  const [floatX, setFloatX] = useState(0);

  const floating = () => {
    var x = 10 + Math.random(-5, 5);
    setFloatX(x);
  };

  useEffect(() => {
    const interval_set_x = setInterval(floating, 1000);

    return () => {
      clearInterval(interval_set_x);
    };
  }, []);

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
    // translateX(${floatX}%)
    // rotate(0.5turn)
    <div
      className="boat"
      style={{
        transform: `translateY(${scrollY}px)`,
      }}
    >
      <img src={boat} alt="Boat" />
    </div>
  );
};

export default Boat;
