import React, { useState, useEffect } from 'react';
import { firestore } from './../../firebase/utils'
import Mapa from '../../components/Map/index';
import BestApar from '../../components/BestApar';
import Grid from '../../components/Grid'
import './style.css';

const DeptoInfo = props => {
    const [depto, setDepto] = useState({});
    const [apartments, setApartments] = useState([]);

    function getRandom(arr, n) {
        var result = new Array(n),
            len = arr.length,
            taken = new Array(len);
        if (n > len)
            throw new RangeError("getRandom: more elements taken than available");
        while (n--) {
            var x = Math.floor(Math.random() * len);
            result[n] = arr[x in taken ? taken[x] : x];
            taken[x] = --len in taken ? taken[len] : len;
        }
        return result;
    }


    useEffect (() => {
        firestore
        .collection("bestap")
        .doc(props.match.params.id)
        .get()
        .then(dep => {
            const tempDepto = dep.data()
            setDepto(tempDepto)
        })
        .catch(err => console.log(err))

        firestore
        .collection("bestap")
        .get()
        .then(res => {
        const tempDeps = []
        res.forEach(dep => {
            tempDeps.push(dep.data())
        })
        setApartments(getRandom(tempDeps, 3))
        })
        .catch(err => console.log(err))
    }, [props.match.params.id])

    const mapKey = 'AIzaSyDD82qHCxgBXMX3vzMJRGkM71mNJi5ClG4'
    const mapURL = `https://maps.googleapis.com/maps/api/js?v=9.4.5.exp&key=${mapKey}`

    return (
        
        <div className='contenedor-depto'>        
            <Grid fotos={depto.fotos}/>
            <div className="nombre-depto">
                <h3>{depto.titulo}</h3>
            </div>
            <hr/>
            <div className="seccion1">
                <p className="texto-desc">{depto.descripcion}</p> 
            </div>
            <hr/>
            <div className="seccion2">
                <div className="hola" id="personas" style={{marginLeft: "20px"}}><p className="chau">{depto.personas}</p></div>
                <div className="hola" id="wifi"><p className="chau">{depto.wifi}</p></div>
                <div className="hola" id="balcon"><p className="chau">{depto.balcon}</p></div>
                <div className="hola" id="piso"><p className="chau">{depto.piso}</p></div>
                <div className="hola" id="ascensor"><p className="chau">{depto.ascensor}</p></div>
                <div className="hola" id="pileta"><p className="chau">{depto.pileta}</p></div>
                <div className="hola" id="ac"><p className="chau">{depto.ac}</p></div>
                <div className="hola" id="pet"><p className="chau">{depto.pet}</p></div>    
            </div>
            <hr/>
            <div className="seccion3">
                {depto.lat && depto.lng ?
                <Mapa
                    googleMapURL= {mapURL}
                    lat={depto.lat}
                    lng={depto.lng}
                    containerElement={<div style={{height: '40vh'}}/>}
                    mapElement={<div style={{height: '100%'}}/>}
                    loadingElement= {<p>Cargando</p>}
                />
                : null }
            </div>
            <hr/>
            {apartments && 
            <div className="seccion4">
                <BestApar deptos={apartments}/>
            </div>
            }
        </div>
    )
}
 
export default DeptoInfo;