import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
function Navbar() {
  const [menu, setMenu] = useState(false);

  const clickedMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
  return (
    <div className="navbar-container">
      <nav className={menu ? "navbar active" : "navbar"}>
        <HashLink className="nav-link link" smooth to="/#acerca" scroll={el => scrollWithOffset(el)}>
         Acerca de mi
        </HashLink>
        <HashLink className="nav-link link" smooth to="/proyectos#proyectos" scroll={el => scrollWithOffset(el)}>
         Proyectos
        </HashLink>
        <HashLink className="nav-link link" smooth to="/skillset#skillset" scroll={el => scrollWithOffset(el)}>
         Skillset
        </HashLink>
        <HashLink className="nav-link link" smooth to="/contacto#contacto" scroll={el => scrollWithOffset(el)}>
         Contacto
        </HashLink>
  
      
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
