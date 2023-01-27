import React from "react";
import donnies1 from '../img/donnies1.jpg';
import donnies2 from '../img/donnies2.jpg';
import donnies3 from '../img/donnies3.jpg';
import donniesimgresponsive1 from '../img/donniesresponsive1.jpg'
function proyecto_centro_de_verificacion() {
  return (
    <div className="section-container" id="project-donnies">
      <div className="project-container">
        <div className="project">
          <div className="project-name">
            <h3>Donnie's Guitars</h3>
          </div>
          <p className="project-text">
            Este proyecto es un sitio web que desarrollé para un taller de reparación de guitarras de la Ciudad de México.
            Se desarrolló desde cero utilizando como tecnologías: HTML5, CSS3, Javascript, JQuery y PHP.
            Este proyecto requería que se mostrara la ubicación del taller de guitarras,
            para ello se implementó la API de Google Maps que permite
            mostrar un mapa con un pin situado en la ubicación.
          </p>
          <p className="project-text">
            En el sitio es posible ver todos los servicios con los que cuenta el taller, a través
            de ventanas modales que se implementaron con Vanilla Javascript y CSS.
          </p>
          <p className="project-text">
            También se puede llenar un formulario para ponerse en contacto con el taller que valida y envía
            los datos a un servidor de correo y después los guarda en una base de datos MySQL, todo esto 
            se realizó con PHP.
          </p>
          <p className="project-text"> 
            El sitio web es adaptable en diferentes dispositivos tanto móviles como de escritorio, en portrait y lanscape,
            todo esto con el uso de media queries con CSS y Javascript.
          </p> 
          <p></p>
          <div className="project-image-container">
            <img src={donnies1} alt="donnies1" className="project-image" />
          </div>
          <div className="project-image-container">
            <img src={donnies2} alt="donnies2" className="project-image"/>          
          </div>
          <div className="project-image-container">
            <img src={donnies3} alt="donnies3" className="project-image"/>
          </div>
          {/* <p className="project-text">
            El sitio es responsivo, por lo tanto se adapta a distintos tipos de pantalla.
          </p> */}
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
