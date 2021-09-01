import React, { Fragment, useEffect, useRef} from "react";
import "./Header.css";
import video from "../videos/video-header.mp4";
import Navbar from "./Navbar";
import PrincipalIcon from "../icons/PrincipalIcon";
import {gsap} from 'gsap';
function Header() {
  
  const h1Ref = useRef();
  const pRef = useRef();
  const timeline = gsap.timeline();
  useEffect(()=> {
    timeline.from(h1Ref.current,{y:300, opacity: .1, duration: 1,  ease: 'power4'});
    timeline.from(pRef.current,{ y:500, opacity: .1, duration: 1,  ease: "power4"});

  }, [])
  
  return (
    <Fragment>
      <header>
        <div className="header-container container">
            <div className="header-title">
                <PrincipalIcon width={128}/>
                <h1 ref={h1Ref}>Diego Juárez Velasco</h1>
                <p ref={pRef}>Desarrollador front-end</p>
                  
            </div>
          
          <div className="video-container container">
            <video autoPlay muted loop className="video">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </header>
      <Navbar />
      
    </Fragment>
  );
}

export default Header;
