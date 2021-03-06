import React, { useState, useEffect } from 'react';
import { firestore } from './../../firebase/utils'
import Grid from '../../components/Grid'
import './style.css';

const ExpInfo = props => {
    const [experience, setExperience] = useState({});

    useEffect (() => {
        firestore
        .collection("bestexp")
        .doc(props.match.params.id)
        .get()
        .then(exp => {
            const tempDepto = exp.data()
            setExperience(tempDepto)
        })
        .catch(err => console.log(err))
    }, [props.match.params.id])

    const fotos = experience.fotos

    return (
        <div className='contenedor-depto'>        
            {fotos && <Grid fotos={experience.fotos} cat="Exp"/> }
            <div className="nombre-depto">
                <h3>{experience.titulo}</h3>
            </div>
            <hr/>
            <div className="seccion1">
                <p className="texto-desc">{experience.descripcion}</p> 
            </div>
            <hr/>
            <div className="seccion2-exp">
                <div className="hola-exp" id="duracion"><p className="chau-exp">{experience.duracion}</p></div>
                <div className="hola-exp" id="incluye"><p className="chau-exp">{experience.incluye}</p></div>
                <div className="hola-exp" id="traer"><p className="chau-exp">{experience.traer}</p></div>
            </div>
            <hr/>
            <button className="button-reservar"><a href='https://api.whatsapp.com/send?phone=+5493813040583' target="_blank" rel="noreferrer">Reservar mi cupo</a></button>
        </div>
    )
}
 
export default ExpInfo;