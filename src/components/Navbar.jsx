import React from 'react'
import {AiOutlineBars} from 'react-icons/ai'
function Navbar() {
    return (
        <div className= "navbar-container container">
            <nav>
                <a href="www.facebook.com" className="nav-link link" ><span>Acerca de mi</span></a>
                <a href="www.facebook.com" className="nav-link link" ><span>skillset</span></a>
                <a href="www.facebook.com" className="nav-link link" ><span>Contacto</span></a>
                <a href="www.facebook.com" className="nav-link link" ><span>proyectos</span></a>
            </nav>
            <div className="menu-movil">
                <AiOutlineBars/>
            </div>
        </div>
                    
        
    )
}

export default Navbar
