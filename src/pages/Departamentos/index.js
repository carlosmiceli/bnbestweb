import "../Departamentos/style.css";
import React, { useState, useEffect } from "react";
import { firestore } from './../../firebase/utils'
// import { connect } from 'react-redux'
// import { setAllDeps } from './../../redux/Departamentos/departamentos.actions'
import Card from "react-bootstrap/Card";
import FontAwesome from "react-fontawesome";
import "./style.css";

// const mapStateToProps = ({ dep }) => ({
//   apartments: dep.allDeps
// })

// const mapDispatchToProps = dispatch => ({
//   setAllDeps: deps => dispatch(setAllDeps(deps))
// })

const Departamentos = () => {
  const [apartments, setApartments] = useState([]);

  useEffect (() => {
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
  }, [])

  console.log("1", apartments)

  return (
    <div className='catalogue'>
      <div className='span-catalogue'></div>
      <h2 className='titulo-catalogue'>ELEGÍ TU BEST<br />FAVORITO </h2>
      <div className='span-catalogue'></div>
      <div className='cont-dptos'>
        {apartments.map(bestap => (
          <a href={`/departamentos/${bestap.id}`}>
            <Card style={{ width: "14.5em" }} key={bestap.id}>
              <Card.Img variant='top' src={bestap.fotos[0]}/>
              <Card.Body>
                <Card.Title>{bestap.titulo}</Card.Title>
                <Card.Text>
                  Desde ${bestap.precio} por noche <br />
                  <FontAwesome
                    className='fas fa-bed'
                    name='bed'
                    style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
                  />{" "}{bestap.personas}
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        ))}
      </div>
    </div>
  )
};

export default Departamentos;
// export default connect(mapStateToProps, mapDispatchToProps)(Departamentos);
