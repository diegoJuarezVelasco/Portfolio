import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imgveri from "../img/img-verificentro.jpg";
import donniesimg from "../img/donnies1.jpg";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  //Refs

  const sectionRef = useRef();
  const h2Ref = useRef();

  // eslint-disable-next-line no-unused-vars
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
      route: "/proyectos/proyecto-centro-de-verificacion#project-centro"
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
      route: "/proyectos/proyecto-donnies-guitars#project-donnies"
    },
  ]);

  useEffect(() => {
    gsap.from(h2Ref.current, {
      scrollTrigger: {
        trigger: h2Ref.current,
        start: "top center",
        end: "bottom 20%",
        toggleActions: "play none none none"
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
    const projects = gsap.utils.toArray(".project-button");

    projects.forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top center",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
        rotateY: 90,
        opacity: 0,
        duration: 0.8,
        delay: .5,
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
        y: 200,
        opacity: 0,
      });
    });
  }, []);

  return (
    <section>
      <div className="section-container" ref={sectionRef} id="proyectos">
        <div className="section-title">
          <h2 ref={h2Ref}>Proyectos</h2>
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
                route={project.route}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
