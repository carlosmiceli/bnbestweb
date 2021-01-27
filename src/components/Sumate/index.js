import React, { useState } from "react";
import SumateForm from '../Sumate-Form'
import ReactPlayer from "react-player";
import "./style.css";

const Sumate = () => {

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (  
    <div className="contenedor-sumate">
      <div className='video-sumate'>
        <ReactPlayer
          url={
            "https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/videos%2Fbest.mp4?alt=media&token=9efc3b44-df37-4c8e-bb01-efc8f27107b6"
          }
          width='100%'
          height='100%'
          controls
          playing
          muted
          loop
        />
      </div>
      <div className='content-sumate'>
        <div className='span-sumate'></div>
        <h2 className='titulo-suma' style={{fontFamily: 'gabelisaregular', color: "#5b5757"}}>Somos BEST</h2>
        <div className='span-sumate'></div>
        <h3 className='texto-suma'>
          ¿Tenés un depto o una casa de campo pero no tenés tiempo para
          gestionarlos? <br /> Sumalo a Best y nosotros nos encargamos de todo.
        </h3>
        <button className='saber-mas' onClick={handleShow}>
          SUMATE!
        </button>
        <SumateForm show={show} onHide={handleClose} />
      </div>
    </div>
  );
};

export default Sumate;
