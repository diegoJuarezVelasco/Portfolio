import React, { useEffect, useRef } from "react";
import photograph from "../img/photo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import LightBox from "./Lightbox";
import {AiFillLinkedin} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {AiFillGithub} from "react-icons/ai"
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
      },
    });
    timeline
      .from(h2Ref.current, { y: 100, opacity: 0, duration: 1 })
      .from("contact-icons", {
        x: 100, opacity: 0, duration: 1 
      })
      .from(".my-photo", {
        width: "0px",
        opacity: 0.1,
        ease: "sine",
        duration: 1,
      })
      .from(".contact-icons", {
        x: -50, opacity: 0, duration: 1 

      })
      .from(".about-text", {
        y: 100,
        duration: 1,
        opacity: 0,
      })
      const timeline2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".education",
          start: "top center",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });
      timeline2.from(".block-heading", {
        y:100, opacity: 0, duration: 1, delay: .5
      })
      .from(".block-content", {
        y:100, opacity: 0, duration: 1
      })
  
  }, []);

  return (
    <section>
      <div className="section-container" ref={sectionRef} id="acerca">
        <div className="section-title">
          <h2 ref={h2Ref}>Acerca de mi</h2>
        </div>
        <div className="about-container">
          <div className="photo-container">
            <img src={photograph} alt="myphotograph" className="my-photo" />
            <div className="contact-icons">
              <a href="https://www.linkedin.com/in/diego-juárez-velasco-0142a9224" target="_blank" rel="noreferrer"><AiFillLinkedin className="contact-icon"/></a>
              <a href="mailto:diegoaw591@gmail.com"><MdEmail className="contact-icon"/></a>
              <a href="https://github.com/diegoJuarezVelasco" target="_blank" rel="noreferrer"><AiFillGithub className="contact-icon"/></a>
            </div>
          </div>
          <div className="about-text">
            <h3>¡Hola!👋</h3>
            <p>
              Mi nombre es Diego, estudiante de último semestre de ingeniería en
              computación en la Facultad De Estudios Superiores Aragón &#x00028;
              UNAM &#x00029;. Soy desarrollador front-end, en cuanto a
              desarrollo web y programación se refiere, todo el conocimiento que he adquirido
              ha sido mayormente autodidacta. Soy un apasionado por la tecnología, realmente me emociona la forma
              en como es posible cambiar la vida de las personas a través de soluciones tecnológicas
            </p>
            <LightBox/>
          </div>  
        </div>
        <div className="education">
              <div className="block">
                <div className="block-heading">
                  <h4>Educación</h4>
                </div>
                <div className="block-content">    
                  <p>Facultad de Estudios Superiores Aragón (UNAM)</p>
                  <p>Ingeniería en Computación</p>
                  <p>Google Foundations of User Experience (UX) Design Certificate</p>
                </div>
              
              </div>
        </div>
      </div>
    </section>
  );
}

export default About;
