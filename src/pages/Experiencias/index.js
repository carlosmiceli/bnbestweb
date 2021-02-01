import "../Departamentos/style.css";
import React, { useState, useEffect } from "react";
import { firestore } from './../../firebase/utils'
// import { connect } from 'react-redux'
// import { setAllDeps } from './../../redux/Departamentos/departamentos.actions'
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import "./style.css";

// const mapStateToProps = ({ dep }) => ({
//   apartments: dep.allDeps
// })

// const mapDispatchToProps = dispatch => ({
//   setAllDeps: deps => dispatch(setAllDeps(deps))
// })

const Experiencias = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect (() => {
    firestore
    .collection("bestexp")
    .get()
    .then(res => {
      const tempExps = []
      res.forEach(exp => {
        tempExps.push(exp.data())
      })
      setExperiences(tempExps)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='catalogue'>
      <div className='span-catalogue'></div>
      <h2 className='titulo-catalogue'>VIVE TU BEST<br />EXPERIENCIA </h2>
      <div className='span-catalogue'></div>
      <div className='cont-dptos'>
        {experiences.map(bestexp => (
          <a href={`/experiencias/${bestexp.id}`}>
            <Card key={bestexp.id}>
              <Card.Img variant='top' src={bestexp.fotos[0]}/>
              <Card.Body>
                <Card.Title>{bestexp.titulo}</Card.Title>
                <Card.Text style={{ display: "flex", flexDirection: "column" }}>
                  <div>Desde ${bestexp.precio} por persona</div>
                  <div><FontAwesomeIcon icon={faClock} />{" "}{bestexp.duracion}</div>
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
};

export default Experiencias;
// export default connect(mapStateToProps, mapDispatchToProps)(Departamentos);
