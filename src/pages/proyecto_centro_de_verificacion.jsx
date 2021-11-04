import React from "react";
import imgveri from "../img/img-verificentro.jpg";
import mapimg from "../img/imgmapa.jpg";
import pdfimg from "../img/pdf1.jpg";
import centroimgresponsive from "../img/capturacentroresponsive1.jpg"
import centroimgresponsive2 from "../img/capturacentroresponsive2.jpg"
function proyecto_centro_de_verificacion() {
  return (
    <div className="section-container" id="project-centro">
      <div className="project-container">
        <div className="project">
          <div className="project-name">
            <h3>Centro de verificación vehicular</h3>
          </div>
          <p className="project-text">
            Este proyecto se trató de un sitio web que desarrolle para un centro
            de verificación vehicular. Se desarrolló con HTML5, CSS3, Javascript
            y jQuery.
          </p>
          <img src={imgveri} alt="verificentro" className="project-image" />
          <p className="project-text">
            Se requería que el sitio web mostrara la ubicación del centro de
            verificación, para lograrlo decidí implementar la API de Google Maps
            que permite mostrar un mapa situado en la ubicación del centro.
          </p>
          <div className="project-image-container">
            <img src={mapimg} alt="mapa-centro" className="project-image" />
          </div>

          <p className="project-text">
            También se requería que desde el sitio web fuera posible visualizar
            algunos archivos PDF. Para mostrar los PDF implemente la API de
            adobe: “PDF Embed API”. Con esta API el usuario puede interactuar
            con los archivos PDF directamente desde el sitio web sin necesidad
            de tener instalado algún lector de PDF.
          </p>
          <div className="project-image-container">
            <img src={pdfimg} alt="pdf-centro" className="project-image" />
          </div>
          <p className="project-text">
            El sitio se adapta a distintos tipos de pantalla. 
          </p>
          <div className="project-image-container">
            <img src={centroimgresponsive} alt="img-centro-responsive" className="project-image" />
          </div>
          <div className="project-image-container">
            <img src={centroimgresponsive2} alt="img-centro-responsive2" className="project-image" />
          </div>

          <div className="project-links">
            <a href="https://tu990.mx" target="_blank" rel="noreferrer">Visitar sitio web</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default proyecto_centro_de_verificacion;
