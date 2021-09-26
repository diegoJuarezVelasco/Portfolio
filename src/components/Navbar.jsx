import React, { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const clickedMenu = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  const clickLink = (e) => {
    e.preventDefault();
    setMenu(false);
    const target = e.target.getAttribute("href");
    const elementLocation = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: elementLocation - 80,
    });
  };

  return (
    <div className="navbar-container">
      <nav className={menu ? "navbar active" : "navbar"}>
        <a href="#about" className="nav-link link" onClick={clickLink}>
          Acerca de mi
        </a>
        <a href="#projects" className="nav-link link" onClick={clickLink}>
          Proyectos
        </a>
        <a href="#skill" className="nav-link link" onClick={clickLink}>
          Skillset
        </a>
        <a href="#contact" className="nav-link link" onClick={clickLink}>
          Contacto
        </a>
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
