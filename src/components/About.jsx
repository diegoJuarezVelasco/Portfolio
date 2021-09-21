import React, {useEffect, useRef} from 'react'
import photograph from '../img/photo.jpg'
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {gsap} from 'gsap';
import { Power0 } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);
function About() {
    
    const sectionRef = useRef();
    const h2Ref = useRef();

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom 20%",
                toggleActions: "play none none none",
            }
        });
        timeline.from(h2Ref.current, {y: 100, opacity: 0, duration: 1, ease: Power0})
        .from(".my-photo", {width: '0px', opacity: .1, ease: "sine", duration: 1}).from(".about-text",{
            y:100, duration: 1, opacity: 0 
        })


    }, [])
    
    return (
        <section>
            <div className="section-container" ref={sectionRef}>
                <div className="section-title">
                    <h2 ref={h2Ref}>Acerca de mi</h2>
                </div>
                <div className="about-container">
                    <div className="photo-container">
                        <img src={photograph} alt='myphotograph' className='my-photo'/>
                    </div>
                    <div className="about-text">
                    <p>Mi nombre es Diego, estudiante de último semestre de ingeniería en computación
                        en la Facultad De Estudios Superiores Aragón &#x00028; UNAM &#x00029;. Soy desarrollador
                        front-end y en cuanto a desarrollo web se refiere, todo el conocimiento que he adquirido ha sido mayormente
                        autodidacta.
                    </p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About
