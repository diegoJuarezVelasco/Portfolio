import React, {useState } from "react";

import GlassLogo from "../icons/GlassLogo";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: '90%',
    height: '90%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '50px 0px', 
    'overflow-y': 'scroll'
  
  
  },
}));



function Project({ id, name, url, git, img, description,alt }) {
  
  // Configuración del modal de material-ui
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div className="project-container" >
      <button className="project-button" onClick={handleOpen}>
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
      {/* <div className="project-links">
        <a href={url}>Visitar Sitio</a>
      </div> */}
      <Modal
        open={open}
        onClose={() => {
          handleClose();
        }}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className="modal-title">
            <h3>{name}</h3>
          </div>
            <div className="modal-img">
              <img src={img} alt={alt}/>
              <div className="modal-text"><p>{description}</p></div>
            </div>
            
        </div>
      </Modal>
    </div>
  );
}

export default Project;
