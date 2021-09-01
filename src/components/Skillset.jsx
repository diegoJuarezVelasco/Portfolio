import React, {useEffect, useRef} from 'react'
import HTML5Logo from '../icons/HTML5Logo';
import JavascriptLogo from '../icons/JavascriptLogo';
import CSSLogo from '../icons/CSSLogo';
import ReactLogo from '../icons/ReactLogo';
import NPMLogo from '../icons/NPMLogo';
import GitLogo from '../icons/GitLogo';
import TerminalLogo from '../icons/TerminalLogo';
import AWSLogo from '../icons/AWSLogo';
import {gsap} from 'gsap';

function Skillset() {
    
    const skillRef = useRef();
    const skillSelector = gsap.utils.selector(skillRef);
    const timeline = useRef();

    useEffect(()=> {
        
        timeline.current = gsap.timeline().to(skillSelector("logo-container"), {x: 100})
    },[])
    
     return (
        <section>
            <div className="section-container">
                <div className="section-title">
                    <h2>Skillset</h2>
                </div>
                <div className="skillset-container" ref={skillRef}>
                    <div className="logo-container">
                        <HTML5Logo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                        <JavascriptLogo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                        <CSSLogo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                        <ReactLogo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                        <NPMLogo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                    <GitLogo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                        <TerminalLogo className="skill-logo"/>
                    </div>
                    <div className="logo-container">
                    <AWSLogo className="skill-logo"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skillset
