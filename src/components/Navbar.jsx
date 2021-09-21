import React, {useState} from 'react'
import {AiOutlineBars } from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';

function Navbar() {
    
    const [menu, setMenu] = useState(false);

    const clickedMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    }
    const closeMenu = () => {
        setMenu(false);
    }
    
    return (
        <div className={menu ? 'menu-active container' : 'menu container'} >
            <nav >
                <a href="#about" className="nav-link link" onClick={closeMenu}><span>Acerca de mi</span></a>
                <a href="#skillset" className="nav-link link" onClick={closeMenu}><span>Skillset</span></a>
                <a href="#contact" className="nav-link link" onClick={closeMenu}><span>Contacto</span></a>
                <a href="#projects" className="nav-link link" onClick={closeMenu}><span>Proyectos</span></a>
            </nav>
            <div className="menu-movil">
                {menu ? <FaTimes onClick={clickedMenu}/> : <AiOutlineBars onClick={clickedMenu}/>}
            </div>
        </div>
                    
        
    )
}

export default Navbar
