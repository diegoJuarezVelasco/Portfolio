import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { NavHashLink } from 'react-router-hash-link';
import {scrollWithOffset} from '../functions/index.js';
function Navbar() {
  const [menu, setMenu] = useState(false);

  const clickedMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const clickLink = () => {
    setMenu(false);
  };  

  return (
    <div className="navbar-container">
      <nav className={menu ? "navbar active" : "navbar"}>
        <NavHashLink activeClassName="active" className="nav-link link" smooth to="/#acerca" scroll={el => scrollWithOffset(el)} onClick={clickLink} >
         Acerca de mi
        </NavHashLink>
        <NavHashLink className="nav-link link" smooth to="/proyectos#proyectos" scroll={el => scrollWithOffset(el)}onClick={clickLink}>
         Proyectos
        </NavHashLink>
        <NavHashLink className="nav-link link" smooth to="/skillset#skillset" scroll={el => scrollWithOffset(el)}onClick={clickLink}>
         Skillset
        </NavHashLink>
        <NavHashLink className="nav-link link" smooth to="/contacto#contacto" scroll={el => scrollWithOffset(el)}onClick={clickLink}>
         Contacto
        </NavHashLink>
  
      
      </nav>
      <div className="menu-movil">
        {menu ? (
          <FaTimes onClick={clickedMenu} />
        ) : (
          <AiOutlineBars onClick={clickedMenu} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
