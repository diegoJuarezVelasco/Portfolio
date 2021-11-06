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
import VSCodeLogo from "./VSCodeLogo";
import BootstrapIcon from "./BootstrapIcon";
import MySQLLogo from "./MySQLLogo";
import MongoDBLogo from "./MongoDBLogo";
import PostmanLogo from "./PostmanLogo";
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
      .from(".skill-group-title", {opacity: 0, duration: 1 })
      .from(".skill-name", { y: -100, opacity: 0 , duration: 1 })
      .from(".logo-container", {opacity: 0 , duration: 1 })
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="section-container" id="skillset">
        <div className="section-title">
          <h2 ref={h2Ref}>Skillset</h2>
        </div>
        <div className="skillset-container" ref={skillContainerRef}>
          <div className="skill-group">
            <div className="skill-group-title">
              <h3>Tools</h3>
            </div>
            <div className="skill">
              <p className="skill-name">Git/GitHub</p>
              <div className="logo-container">
                <GitLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">Terminal</p>
              <div className="logo-container">
                <TerminalLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">NPM</p>
              <div className="logo-container">
                <NPMLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">VSCode</p>
              <div className="logo-container" >
                <VSCodeLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">Postman</p>
              <div className="logo-container" >
                <PostmanLogo className="skill-logo" />
              </div>
            </div>

            <div className="skill">
              <p className="skill-name">AWS</p>
              <div className="logo-container">
                <AWSLogo className="skill-logo" />
              </div>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">
              <h3>Frontend</h3>
            </div>
            <div className="skill">
              <p className="skill-name">HTML5</p>
              <div className="logo-container" >
                <HTML5Logo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">CSS3</p>
              <div className="logo-container" >
                <CSSLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">Javascript</p>
              <div className="logo-container" >
                <JavascriptLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">React</p>
              <div className="logo-container" >
                <ReactLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">GSAP</p>
              <div className="logo-container" >
                <GSAPIcon className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">Bootstrap</p>
              <div className="logo-container" >
                <BootstrapIcon className="skill-logo" />
              </div>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">
              <h3>Backend</h3>
            </div>
            <div className="skill">
              <p className="skill-name">NodeJS</p>
              <div className="logo-container" >
                <NodeJSLogo className="skill-logo" />
              </div>
            </div>
          </div>
          <div className="skill-group">
            <div className="skill-group-title">
              <h3>Databases</h3>
            </div>
            <div className="skill">
              <p className="skill-name">MySQL</p>
              <div className="logo-container" >
                <MySQLLogo className="skill-logo" />
              </div>
            </div>
            <div className="skill">
              <p className="skill-name">MongoDB</p>
              <div className="logo-container" >
                <MongoDBLogo className="skill-logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skillset;
