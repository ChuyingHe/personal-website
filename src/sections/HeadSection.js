import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './HeadSection.scss';
import Fish from '../asset/fish.png';

const HeadSection = () => {
    const head_ref = useRef();
    const circle = useRef();

    var xCenter = 275;
    var yCenter = 200;
    var poolRadius = 200;
    function tweenFish() {
        var angle = Math.random() * Math.PI * 2; //random angle in radians
        var radius = Math.random() * poolRadius;
        const fish = document.getElementsByClassName('fish');

        gsap.to(fish, 2, {x:Math.cos(angle) * radius + xCenter, y:Math.sin(angle) * radius + yCenter, ease:"power1.easeInOut", onComplete:tweenFish});
    }
    tweenFish();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // use scoped selectors
            gsap.to(".box", { rotation: 360, duration: 2, x: 300 });
            // or refs
            gsap.to(circle.current, { rotation: 360 });

        }, head_ref);

        return () => ctx.revert();
    }, []);

    return <>
        <h1>HeadSection</h1>
        <img src={Fish} alt="fireSpot" className="fish" style={{"width": "100px"}}/>
        <img src={Fish} alt="fireSpot" className="fish" style={{"width": "100px"}}/>
        <img src={Fish} alt="fireSpot" className="fish" style={{"width": "100px"}}/>

        <div ref={head_ref}>
            <div className="box">selector</div>
            <div className="circle" ref={circle}>Ref</div>
        </div></>
}

export default HeadSection;
