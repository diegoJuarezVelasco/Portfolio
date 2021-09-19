import React, {useState} from 'react'
import {AiOutlineBars } from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';

function Navbar() {
    
    const [menu, setMenu] = useState(false);

    const clickedMenu = () => {
        menu ? setMenu(false) : setMenu(true);
    }
    
    
    return (
        <div className= "navbar-container container">
            <nav>
                <a href="www.facebook.com" className="nav-link link" ><span>Acerca de mi</span></a>
                <a href="www.facebook.com" className="nav-link link" ><span>skillset</span></a>
                <a href="www.facebook.com" className="nav-link link" ><span>Contacto</span></a>
                <a href="www.facebook.com" className="nav-link link" ><span>proyectos</span></a>
            </nav>
            <div className="menu-movil" onClick={clickedMenu}>
                {menu ? <FaTimes/> : <AiOutlineBars/>}
            </div>
        </div>
                    
        
    )
}

export default Navbar
