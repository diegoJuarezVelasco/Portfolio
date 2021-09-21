import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power0 } from "gsap/all";
import imgveri from "../img/img-verificentro.jpg";
import donniesimg from "../img/donnies2.jpg";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  //Refs

  const sectionRef = useRef();
  const h2Ref = useRef();

  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Centro de verificación vehicular",
      url: "https://www.tu990.mx",
      git: "https://github.com/diegoJuarezVelasco/verificentro",
      img: imgveri,
      description:
        "Una página que realice para un centro de verificación vehicular, construida con HTML5, CSS3, Javascript, un poco de jQuery, la API de AdobeDocuments y la API de Google Maps.",
      alt: "verificentro Tu 990",
    },
    {
      id: 2,
      name: "Donnie´s Guitars",
      url: "https://www.donniesguitars.com",
      git: "https://github.com/diegoJuarezVelasco/verificentro",
      img: donniesimg,
      description:
        "Una Página que realice para un taller de reparación de guitarras, usando como tecnologías HTML5, CSS3, Javascript, PHP, entre otras.",
      alt: "Donnies Guitars",
    },
  ]);

  useEffect(() => {
    gsap.from(h2Ref.current, {
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: Power0,
    });
    const projects = gsap.utils.toArray(".project-button");

    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "50% center",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        rotateY: 90, opacity: 0, duration: .8,
      });
    });
    const buttons = gsap.utils.toArray(".project-links");

    buttons.forEach((button) => {
      gsap.from(button, {
        scrollTrigger: {
          trigger: button,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        y: 200, opacity: 0
      })
    });


  }, []);

  return (
    <section>
      <div className="section-container" ref={sectionRef}>
        <div className="section-title">
          <h2 ref={h2Ref}>Projects</h2>
          <div className="projects-container">
            {projects.map((project) => (
              <Project
                id={project.id}
                name={project.name}
                url={project.url}
                git={project.git}
                img={project.img}
                description={project.description}
                alt={project.alt}
                key={project.id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
