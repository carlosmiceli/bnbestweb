import React, { useState } from 'react';
import { firestore } from './../../firebase/utils'
// import Mapa from '../../components/Map/index';
// import Credentials from '../../Credentials';
import BestApar from '../../components/BestApar';
// import Grid from '../../components/Grid'
import './style.css';

const DeptoInfo = props => {
    const [depto, setDepto] = useState({});

    console.log("0", props)
  
    firestore
      .collection("bestap")
      .doc("props.id")
      .get()
      .then(dep => {
        const tempDepto = dep.data()
        console.log("1", tempDepto)
        setDepto(tempDepto)
      })
      .catch(err => console.log(err))
  
    // const mapURL = `https://maps.googleapis.com/maps/api/js?v=9.4.5.exp&key=${Credentials.mapsKey}`;

    return (
        <div className='contenedor-depto'>        
            {/* <Grid fotos={depto.fotos}/> */}
            <div className="nombre-depto">
                <h3 className="nombre-depto-txt"> {depto.titulo}</h3>
            </div>
            <hr/>
            <div className="seccion1">
                <div className="descDeptos">
                    <p className="texto-desc">{depto.descripcion}</p> 
                </div>
            </div>
            <hr/>
            <div className="seccion2">
                <div className="amenities">
                    <div className="imagenes-amn">
                        <div className="hola" id="personas"><p className="chau">{depto.personas}</p></div>
                        <div className="hola" id="baño"><p className="chau">{depto.baño}</p></div>
                        <div className="hola" id="balcon"><p className="chau">{depto.balcon}</p></div>
                        <div className="hola" id="piso"><p className="chau">{depto.piso}</p></div>
                        <div className="hola" id="ascensor"><p className="chau">{depto.ascensor}</p></div>   
                    </div>
                </div>  
            </div>
            <hr/>
            <div className="seccion3">
                <div className="ubicDeptos">
                    {/* <Mapa
                        googleMapURL= {mapURL}
                        containerElement={<div style={{height: '340px'}}/>}
                        mapElement={<div style={{height: '100%'}}/>}
                        loadingElement= {<p>Cargando</p>}
                    /> */}
                </div>
            </div>
            <hr/>
            <div className="seccion4">   
                <div className="evaluaciones">
                    <div>
                        <img src="../../../img/iconos/fivestars.png" alt="" id="estrellas" />
                    </div>
                    <h5 className="ev-texto">"{depto.reviews[1].mensaje}"</h5>
                    <h6>{depto.reviews[1].nombre}, {depto.reviews[1].ciudad}</h6>
                </div>         
            </div>
            <hr/>
            <div className="seccion5">
                <div className="similDeptos">
                    <BestApar/>
                </div>
            </div>
        </div>
    )
}
 
export default DeptoInfo;