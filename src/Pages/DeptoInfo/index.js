import React, { useState, useEffect } from 'react';
import './style.css';
import Mapa from '../../Componentes/Map/index';
import Credentials from '../../Credentials';
import BestApar from '../../Componentes/BestApar';
import Grid from '../../Componentes/Grid'
import firebase from "../../firebase.js";

function useDepto(props) {
    useEffect(() => {
      firebase
        .firestore()
        .collection("bestap")
        .doc(props.match.params.id)
        .get()
        .then(doc => {
            const dep = doc.data()
            console.log(dep)
            return dep
        })
    })
}

const mapURL = `https://maps.googleapis.com/maps/api/js?v=9.4.5.exp&key=${Credentials.mapsKey}`;

function DeptoInfo() {
    const dep123 = useDepto()
  
    return (
        <div className='contenedor-depto'>        
        {/* <Grid fotos={dep123.fotos}/> */}


<div className="nombre-depto"><h3 className="nombre-depto-txt"> {dep123.titulo}</h3></div>
<hr/>
        <div className="seccion1">
            <div className="descDeptos">
                <p className="texto-desc">{dep123.descripcion} 
                </p>
            </div>
        </div>
        <hr/>
        <div className="seccion2">
          <div className="amenities">
                  <div className="imagenes-amn">
                      <div className="hola" id="personas"><p className="chau">4</p></div>
                      <div className="hola" id="banio"><p className="chau">si</p></div>
                      <div className="hola" id="balcon"><p className="chau">si</p></div>
                      <div className="hola" id="piso"><p className="chau">7mo</p></div>
                      <div className="hola" id="ascensor"><p className="chau">si</p></div>
                      <div className="hola" id="wifi"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>
                      <div className="hola"><p className="chau">si</p></div>    
                  </div>
              </div>  
        </div>
      <hr/>
        <div className="seccion3">
            <div className="ubicDeptos">
            <Mapa
                    googleMapURL= {mapURL}
                    containerElement={<div style={{height: '340px'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                    loadingElement= {<p>Cargando</p>}
                    />
            </div>
        </div>
        <hr/>
            <div className="seccion4">   
            <div className="evaluaciones">
                <div><img src="../../../img/iconos/fivestars.png" id="estrellas"></img></div>
                <h5 className="ev-texto">"Un departamento genial, amplio, cómodo y súper completo. No le falta absolutamente nada. Súper limpio y prolijo, en un buen lugar, sin molestias. Súper recomendado."</h5>
                <h6>María, Córdoba</h6>
            </div>         
            </div>
            <hr/>

            <div className="seccion5">
            <div className="similDeptos"><BestApar/></div>

            </div>

        </div>);
    }
 
export default DeptoInfo;