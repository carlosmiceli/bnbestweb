import "../Departamentos/style.css";
import React, { useState, useEffect } from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import FontAwesome from "react-fontawesome";
import firebase from "../../firebase.js";
import {
  Link
}from "react-router-dom";

function useAparments() {
  const [apartments, setAparments] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("bestap")
      .onSnapshot(snapshot => {
        const newAparments = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setAparments(newAparments);
      });
  }, []);

  return apartments;
}

const Departamentos = () => {
  const apartments = useAparments();

  return (
    <div className='sec-dptos'>
      <div className='span-sec-dptos'></div>
      <h2 className='titulo-sec-dptos'>
        ELEGÍ TU BEST <br />
        FAVORITO
      </h2>
      <div className='span-sec-dptos'></div>

      <div className='section-df'>

        <div className='contenedor-dptos'>
          {apartments.map(bestap => (
            <Link to={`/departamentos/${bestap.id}`} key={bestap.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant='top' src={bestap.fotos[0]} />
                <Card.Body>
                  <Card.Title key={bestap.id}>{bestap.titulo}</Card.Title>
                  <Card.Text>
                    Desde ${bestap.precio} por noche <br />
                    <FontAwesome
                      className='fas fa-bed'
                      name='bed'
                      size='1x'
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />{" "}
                    {bestap.camas} |{" "}
                    <FontAwesome
                      className='fas fa-bath'
                      name='bath'
                      size='1x'
                      style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                    />{" "}
                    {bestap.banios} |
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departamentos;
