import React, { Fragment, useEffect, useRef } from "react";
import "./Header.css";
import video from "../videos/video-header.mp4";
import Navbar from "./Navbar";
import Terminal2 from "./Terminal2";
import { gsap } from "gsap";
function Header() {
  const titleRef = useRef();
  const h1Ref = useRef();
  const pRef = useRef();
  const timeline = gsap.timeline();
  const box = ".box";
  const svg = ".svg";
  const shape = ".shape";
  const underscore = ".underscore";

  useEffect(() => {
    timeline
      .to(svg, { visibility: "visible", duration: 0, delay:1})
      .from(box, { opacity: 0, duration: 2, ease: "power4", delay: 0.5 })
      .from(shape, { y: -100, opacity: 0, duration: 1 })
      .from(underscore, { x: 100, opacity: 0, duration: 1 })
      .to(titleRef.current, { visibility: "visible", duration: 0 })
      .from(h1Ref.current, { y: 300, opacity: 0.1, duration: 2.5, ease: "power4",})
      .from(pRef.current, {y: 500, opacity: 0.1, duration: 0.5, ease: "power4",})
      .to(pRef.current, { color: " #f1c40f" })      
      .to(underscore, { opacity: 0, repeat: -1, repeatDelay: 0.5});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Navbar />
      <header>
        <div className="header-container container">
          <div className="header-title" ref={titleRef}>
            <Terminal2 timeline={timeline} />
            <h1 ref={h1Ref}>Diego Juárez Velasco</h1>
            <p ref={pRef}>Desarrollador Front-end</p>
          </div>

          <div className="video-container container">
            <video autoPlay muted loop className="video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </header>
    
    </Fragment>
  );
}

export default Header;
