import React, { useState, useEffect } from 'react';
import { firestore } from './../../firebase/utils'
import './style.css';

const PostBest = props => {

    const [articulo, setArticulo] = useState({})    

    useEffect (() => {
        firestore
        .collection("bestblog")
        .doc("lomabola")
        .get()
        .then(p => {
            const tempPost = p.data()
            console.log(tempPost)
            setArticulo(tempPost)
        })
        .catch(err => console.log(err))
    }, [props.match.params.id])

    const parrafos = articulo.contenido

    return (
        <div className="post-main">
            <div>
                <img className="post-foto" src={articulo.foto} alt=""/>
                <div className="post-titulo">
                    <h2>{articulo.titulo}</h2>
                    <h4 className="post-autor">Escrito por @<a target="_blank" rel="noreferrer" href={articulo.linkautor}>{articulo.autor}</a> - {articulo.fecha}</h4>
                </div>
                <div className="post-contenido">
                    {parrafos && parrafos.map(p => (
                    <p className="post-parrafo">{p}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostBest;
