import React from "react";
function proyecto_centro_de_verificacion() {
  return (
    <div className="section-container" id="project-centro">
      <div className="project-container">
        <div className="project">
          <div className="project-name">
            <h3>Centro de verificación vehicular</h3>
          </div>
          <p className="project-text">
            Este proyecto es un sitio web que desarrollé para un centro
            de verificación vehicular del Estado de México, se desarrolló
            utilizando como tecnologías: HTML5, CSS3, Javascript y JQuery.
            Este proyecto requería que se mostrara la ubicación del centro de
            verificación, para ello se implementó la API de Google Maps que permite
            mostrar un mapa con un pin situado en la ubicación.
          </p>
          <p className="project-text">
            También se requería que desde el sitio web fuera posible visualizar
            algunos archivos en formato PDF. Para poder mostrar los archivos, se implementó la API de
            adobe: “PDF Embed API”. Con esta API el usuario puede interactuar
            con los archivos PDF directamente desde el sitio web sin necesidad de tener instalado
            un visor de archivos.
          </p>
          <p className="project-text"> 
            El sitio web es adaptable en diferentes dispositivos tanto móviles como de escritorio, en portrait y lanscape,
            todo esto con el uso de media queries con CSS y Javascript.
          </p> 
          <iframe title="verificentro-iframe" className="project-view-box" src="https://tu990.mx/" frameborder="0"></iframe>
          <div className="project-links">
            <a href="https://tu990.mx" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default proyecto_centro_de_verificacion;
