import React from "react";
import ReactPlayer from "react-player";
import "./style.css";

const Sumate = () => {

  return (  
    <div className="contenedor-sumate">
      <div className='video-sumate'>
        <ReactPlayer
          url={
            "https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/videos%2Fprueba.mp4?alt=media&token=61c50fc5-9e67-4d1a-b458-5d01fe8a6f88"
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
        <h2 className='titulo-suma'>Sumá tu propiedad</h2>
        <div className='span-sumate'></div>
        <h3 className='texto-suma'>
          ¿Tenés un depto o una casa de campo pero no tenés tiempo para
          gestionarlos? <br /> Sumalo a Best y nosotros nos encargamos de todo.
        </h3>
        <button className='saber-mas'>
          SUMÁ TU PROPIEDAD
        </button>
      </div>
    </div>
  );
};

export default Sumate;
