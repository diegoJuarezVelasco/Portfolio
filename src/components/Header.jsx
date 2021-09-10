import React, { Fragment, useEffect, useRef} from "react";
import "./Header.css";
import video from "../videos/video.mp4";
import Navbar from "./Navbar";
import PrincipalIcon from "../icons/PrincipalIcon";
import {gsap} from 'gsap';
function Header() {
  const titleRef = useRef();
  const h1Ref = useRef();
  const pRef = useRef();
  const timeline = gsap.timeline();
  
  useEffect(()=> {
    timeline.to(titleRef.current,{visibility: 'visible', duration: 0})
    .from(h1Ref.current,{y:300, opacity: .1, duration: 2.5,  ease: 'power4'})
    .from(pRef.current,{ y:500, opacity: .1, duration: .5,  ease: "power4"})
    .to(pRef.current,{ color: "#88c5cc"})

  }, [])
  
  return (
    <Fragment>
      <header>
        <div className="header-container container">
            <div className="header-title" ref={titleRef}>
                <PrincipalIcon width={128} timeline={timeline}/>
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
