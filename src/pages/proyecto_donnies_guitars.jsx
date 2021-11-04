import React from "react";
import donnies1 from '../img/donnies1.jpg';
import donnies2 from '../img/donnies2.jpg';
import donnies3 from '../img/donnies3.jpg';
import donniesimgresponsive1 from '../img/donniesresponsive1.jpg'
function proyecto_centro_de_verificacion() {
  return (
    <div className="section-container" id="project-centro">
      <div className="project-container">
        <div className="project">
          <div className="project-name">
            <h3>Donnie's Guitars</h3>
          </div>
          <p className="project-text">
            Este sitio web lo realicé para un taller de reparación de guitarras de la Ciudad de México.
            Se desarrolló con HTML5, CSS3, Javascript, jQuery y PHP
          </p>
          <div className="project-image-container">
            <img src={donnies1} alt="donnies1" className="project-image" />
          </div>
          <div className="project-image-container">
            <img src={donnies2} alt="donnies2" className="project-image"/>          
          </div>
          <div className="project-image-container">
            <img src={donnies3} alt="donnies3" className="project-image"/>
          </div>
          <p className="project-text">
            El sitio se adapta a distintos tipos de pantalla.
          </p>
          <div className="project-image-container">
            <img src={donniesimgresponsive1} alt="donniesresponsive1" className="project-image"/>
          </div>

          <div className="project-links">
            <a href="https://donniesguitars.com" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default proyecto_centro_de_verificacion;
