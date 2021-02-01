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
            <Grid fotos={depto.fotos} cat="Dep"/>
            <div className="nombre-depto">
                <h3>{depto.titulo}</h3>
            </div>
            <hr/>
            <div className="seccion1">
                <p className="texto-desc">{depto.descripcion}</p> 
            </div>
            <hr/>
            <div className="seccion2">
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fpersonas.svg?alt=media&token=ebb040e6-4551-4a0f-bceb-9edcdbe6fa83" />
                    <p>{depto.personas}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fwifi-signal.svg?alt=media&token=084dc922-2acc-428e-adb2-96a2381cb948" />
                    <p>{depto.wifi}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fbalcon.svg?alt=media&token=dc2f8b9f-4de9-4f6e-9a01-aeda596d92e5" />
                    <p>{depto.balcon}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fpiso.svg?alt=media&token=8db49145-7ca9-443a-b1c4-f25d4d1d8c9c" />
                    <p>{depto.piso}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fascensor.svg?alt=media&token=16677bcf-2fdb-4b7f-a09e-976139bb5dcd" />
                    <p>{depto.ascensor}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fpileta.svg?alt=media&token=d70d761b-4e6e-41a6-a751-7710264ca665" />
                    <p>{depto.pileta}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fac.svg?alt=media&token=80b88d49-1a5b-4d06-9aec-f7de524568dd" />
                    <p>{depto.ac}</p>
                </div>
                <div className="iconos-depto">
                    <img alt="" className="icono-imagen" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/iconos%2Fpet.svg?alt=media&token=adb97494-beaf-4d3f-906b-c52e87f139e0" />
                    <p>{depto.pet}</p>
                </div>
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
                <BestApar deptos={apartments} showArrow={true}/>
            </div>
            }
        </div>
    )
}
 
export default DeptoInfo;