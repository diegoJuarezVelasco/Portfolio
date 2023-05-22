import React, { useEffect, useRef } from "react";
import photograph from "../img/photo.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import LightBox from "./Lightbox";
import { AiFillLinkedin } from "react-icons/ai"
import { MdEmail } from "react-icons/md"
import { AiFillGithub } from "react-icons/ai"
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
        trigger: ".experience-container",
        start: "15% center",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });
    timeline2.from(".experience-title-container", {
      y: 100, opacity: 0, duration: 1, delay: .5
    })
      .from(".experience-content", {
        y: 100, opacity: 0, duration: 1
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
              <a href="https://www.linkedin.com/in/diego-juárez-velasco-0142a9224" target="_blank" rel="noreferrer"><AiFillLinkedin className="contact-icon" /></a>
              <a href="mailto:diegoaw591@gmail.com"><MdEmail className="contact-icon" /></a>
              <a href="https://github.com/diegoJuarezVelasco" target="_blank" rel="noreferrer"><AiFillGithub className="contact-icon" /></a>
            </div>
          </div>
          <div className="about-text">
            <h3>¡Hola!👋</h3>
            <p>Mi nombre es Diego, estudie ingeniería en computación en la Facultad de Estudios
              Superiores Aragón &#x00028;UNAM&#x00029;. Soy desarrollador Front End con más de un año de experiencia creando sitios web responsive,
              landing pages e interfaces.
            </p>
            <LightBox />
          </div>
        </div>
        <div className="experience-container">
          <div className="experience">
            <div className="experience-title-container">
              <h4 className="experience-title">Educación</h4>
            </div>
            <div className="experience-content">
              <p>Facultad de Estudios Superiores Aragón (UNAM)</p>
              <p>Ingeniería en Computación</p>
              <p>Google: Foundations of User Experience (UX) Design Certificate</p>
              <p>Scrum Institute: Scrum Certification For Web Developer</p>
            </div>
          </div>
          <div className="experience">
            <div className="experience-title-container">
              <h4 className="experience-title">Experiencia laboral</h4>
            </div>
            <div className="experience-content">
              <p>Global Sight Corporation</p>
              <p>Puesto: Desarrollador Frontend</p>
              <ul>
                <li>Desarrollo de landing pages, animaciones, UI con HTML CSS, Javascript, Bootstrap, y React</li>
                <li>Diseño responsivo</li>
                <li>Implementación de API REST con Node.js y Express.js</li>
                <li>Integración de servicios AWS en aplicaciones web (funciones serverless con Lambda, AWS SDK)</li>
              </ul>
            </div>
            <div className="experience-content">
              <p>Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS)</p>
              <p>Puesto: Desarrollador Backend</p>
              <ul>
                <li>Desarrollo de backend de una aplicación de sobre la genealogía de la UNAM</li>
                <li>Desarrollo de API REST con GO</li>
                <li>Creación de bases de datos con MySQL</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="education">
          <div className="block">
            <div className="block-heading">
              <h4>Educación</h4>
            </div>
            <div className="block-content">
              <p>Facultad de Estudios Superiores Aragón (UNAM)</p>
              <p>Ingeniería en Computación</p>
              <p>Google: Foundations of User Experience (UX) Design Certificate</p>
              <p>Scrum Institute: Scrum Certification For Web Developer</p>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="block">
            <div className="block-heading">
              <h4>Experiencia Laboral</h4>
            </div>
            <div className="block-content">
              <p>Global Sight Corporation</p>
              <p>Puesto: Desarrollador Frontend</p>
              <p>Desarrollo de landing pages, animaciones, UI con HTML CSS, Javascript, Bootstrap, y React</p>
              <p>Diseño responsivo</p>
              <p>Implementación de API REST con Node.js y Express.js</p>
              <p>Integración de servicios AWS en aplicaciones web (funciones serverless con Lambda, AWS SDK)</p>
            </div>
            
          </div>
        </div>
        <div className="education">
          <div className="block">
            <div className="block-heading">
            </div>
            <div className="block-content">
              <p>Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas (IIMAS)</p>
              <p>Puesto: Desarrollador Backend</p>
              <p>Desarrollo de backend de una aplicación de sobre la genealogía de la UNAM</p>
              <p>Desarrollo de API REST con GO</p>
              <p>Creación de bases de datos con MySQL</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default About;
