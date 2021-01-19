import React, { useState } from 'react';
import SumateForm from '../Sumate-Form'
import './about.css';

const About = () => {

const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
const handleClose = () => setShow(false);
    
    return ( 
        <div className="about-cont">
            <div>
                <div className="span"></div>
                <h2 className="titulo-about">Alquileres <br/>Temporarios</h2>
                <div className="span"></div>
                <p className="texto-about">Departamentos totalmente equipados. <br/>Alquilá en Argentina por día, semana, mes o el tiempo que quieras.</p>
                <a href="/departamentos"><button className='saber-mas'>
                VER DEPARTAMENTOS
                </button>
                </a>
            </div>
            <div className="span-middle"></div>
            <div>
                <div className='span-2'></div>
                <h2 className='titulo-about'>Soy<br/>  Anfitrión</h2>
                <div className='span-2'></div>
                <p className='texto-about'>
                ¿Tenés una propiedad pero no tenés tiempo para
                gestionarla?  <br/> Sumala a Best y nosotros nos encargamos de todo.
                </p>
                <button className='saber-mas' onClick={handleShow}>
                SUMÁ TU PROPIEDAD
                </button>
                <SumateForm show={show} onHide={handleClose} />
            </div>
        </div>
     );
}
 
export default About;