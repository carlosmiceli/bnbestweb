import "../Departamentos/style.css";
import React, { useState } from "react";
import { firestore } from './../../firebase/utils'
// import { connect } from 'react-redux'
// import { setAllDeps } from './../../redux/Departamentos/departamentos.actions'
import Card from "react-bootstrap/Card";
import FontAwesome from "react-fontawesome";
import { Link } from "react-router-dom";
import "./style.css";

// const mapStateToProps = ({ dep }) => ({
//   apartments: dep.allDeps
// })

// const mapDispatchToProps = dispatch => ({
//   setAllDeps: deps => dispatch(setAllDeps(deps))
// })

const Departamentos = props => {
  const [apartments, setApartments] = useState([]);

  firestore
    .collection("bestap")
    .get()
    .then(res => {
      const tempDeps = []
      res.forEach(dep => {
        tempDeps.push(dep.data())
      })
      setApartments(tempDeps)
    })
    .catch(err => console.log(err))

  return (
    <div className='sec-dptos'>
      <div className='span-sec-dptos'></div>
      <h2 className='titulo-sec-dptos'>ELEGÍ TU BEST<br />FAVORITO </h2>
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
                    />{" "}{bestap.personas}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
};

export default Departamentos;
// export default connect(mapStateToProps, mapDispatchToProps)(Departamentos);
