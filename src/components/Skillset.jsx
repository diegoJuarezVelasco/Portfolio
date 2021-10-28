import React, { useEffect, useRef } from "react";
import HTML5Logo from "../icons/HTML5Logo";
import JavascriptLogo from "../icons/JavascriptLogo";
import CSSLogo from "../icons/CSSLogo";
import ReactLogo from "../icons/ReactLogo";
import NPMLogo from "../icons/NPMLogo";
import GitLogo from "../icons/GitLogo";
import TerminalLogo from "../icons/TerminalLogo";
import AWSLogo from "../icons/AWSLogo";
import NodeJSLogo from "../icons/NodeJSLogo";
import GSAPIcon from "../icons/GSAPIcon";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skillset() {
  const h2Ref = useRef();
  const skillContainerRef = useRef();
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillContainerRef.current,
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    timeline
      .from(h2Ref.current, { y: 100, opacity: 0, duration: 1 })
      .from("#skill1", { y: -100, opacity: 0 })
      .from("#skill2", { y: -100, opacity: 0 })
      .from("#skill3", { y: -100, opacity: 0 })
      .from("#skill4", { y: -100, opacity: 0 })
      .from("#skill5", { y: -100, opacity: 0 })
      .from("#skill6", { y: -100, opacity: 0 })
      .from("#skill7", { y: -100, opacity: 0 })
      .from("#skill8", { y: -100, opacity: 0 })
      .from("#skill9", { y: -100, opacity: 0 })
      .from("#skill10", { y: -100, opacity: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="section-container" id="skillset">
        <div className="section-title">
          <h2 ref={h2Ref}>Skillset</h2>
        </div>
        <div className="skillset-container" ref={skillContainerRef}>
          <div className="logo-container" id="skill1">
            <HTML5Logo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill2">
            <JavascriptLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill3">
            <CSSLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill4">
            <ReactLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill5">
            <NPMLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill6">
            <GitLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill7">
            <TerminalLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill8">
            <AWSLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill9">
            <NodeJSLogo className="skill-logo" />
          </div>
          <div className="logo-container" id="skill10">
            <GSAPIcon className="skill-logo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillset;
