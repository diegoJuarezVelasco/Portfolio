import React from "react";
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
          <iframe title="verificentro-iframe" className="project-view-box" src="https://donniesguitars.com.mx" frameborder="0"></iframe>
          <div className="project-links">
            <a href="https://donniesguitars.com.mx" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default proyecto_centro_de_verificacion;
