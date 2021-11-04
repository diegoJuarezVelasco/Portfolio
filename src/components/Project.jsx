import React, {useState } from "react";
import { HashLink } from 'react-router-hash-link';
import GlassLogo from "../icons/GlassLogo";
import {scrollWithOffset} from "../functions/index";

function Project({ id, name, url, git, img, description,alt, route }) {
  
  return (
    <div className="project-container" >
      
      <HashLink smooth to={route} scroll={el => scrollWithOffset(el)}>
        <button className="project-button">
          <img src={img} alt="verificentro" className="project-img" />
          <div className="project-title">
            <h3>{name}</h3>
          </div>
          <p className="project-view">
              <span>
                  <GlassLogo className="glass-logo"/>
              </span>
            Ver proyecto
          </p>
        </button>
      </HashLink>
    </div>
  );
}

export default Project;
