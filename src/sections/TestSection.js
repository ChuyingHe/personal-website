import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { TimelineMax } from "gsap/gsap-core";
import { useEffect } from "react";
import "./TestSection.scss";

const TestSection = () => {
  useEffect(() => {
    //   gsap.registerPlugin(CustomEase, CustomWiggle);
    gsap.registerPlugin(CustomEase);

    //copies the ball 20 times
    copy(".ball", 20);

    //swarms all the balls by 400px in each direction on the x-axis, 150 on the y-axis, and uses a 12-second duration for each tween and 15 wiggles.
    swarm(".ball", 400, 150, 12, 15);
  });

  //   //helper function for copying an element a bunch of times.
  function copy(element, quantity) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    var parent = element.parentNode,
      type = element.nodeName,
      a = [],
      child;
    while (--quantity > -1) {
      child = document.createElement(type);
      parent.insertBefore(child, element);
      a.push(child);
      child.outerHTML = element.outerHTML;
    }
    return a;
  }

  //helper function for building the swarm
  function swarm(elements, x, y, duration, wiggles) {
    elements = gsap.utils.toArray(elements);
    var tl = new TimelineMax(),
      i = elements.length,
      ease = "wiggle({type: random, wiggles: " + wiggles + "})",
      delay;
    duration = duration || 2;
    while (--i > -1) {
      delay = Math.random() * duration;
      //set to random color
      gsap.set(elements[i], { backgroundColor: "hsl(random(0, 360),80%,40%)" });
      //animate x and y separately so that they're more randomized (putting x and y in the same tween using the same ease would make the changes coincide and always travel diagonally)
      tl.to(
        elements[i],
        { duration: duration, x: "+=" + x, repeat: -1, ease: ease },
        delay
      ).to(
        elements[i],
        { duration: duration, y: "+=" + y, repeat: -1, ease: ease },
        delay
      );
    }
    tl.time(duration); //jump ahead so that we start with everything spread out.
    return tl;
  }

  return (
    <div class="ball-container">
      <div class="ball"></div>
    </div>
  );
};

export default TestSection;
