import React from "react";
import "./Footer.css";
import {AiFillLinkedin} from "react-icons/ai"
import {MdEmail} from "react-icons/md"
import {AiFillGithub} from "react-icons/ai"
function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <div className="contact-icons">
          <a
            href="https://www.linkedin.com/in/diego-juárez-velasco-0142a9224"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="contact-icon" style={{color: 'white'}}/>
          </a>
          <a href="mailto:diegoaw591@gmail.com">
            <MdEmail className="contact-icon" style={{color: 'white'}}/>
          </a>
          <a
            href="https://github.com/diegoJuarezVelasco"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="contact-icon" style={{color: 'white'}}/>
          </a>
        </div>

        <p className="footer-text">
          Desarrollado en React por Diego Juarez &copy;
        </p>
      </footer>
    </div>
  );
}

export default Footer;
