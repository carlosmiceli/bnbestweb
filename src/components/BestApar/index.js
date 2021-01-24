import  React, { useState } from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import FontAwesome from 'react-fontawesome';
import { firestore } from '../../firebase/utils'

function BestApar (){
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
    <div className="contenedorP" >
      {apartments.map((bestap)=>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={bestap.fotos[0]} />
          <Card.Body>
            <Card.Title key={bestap.id}>{bestap.titulo}</Card.Title>
            <Card.Text>
              Desde ${bestap.precio} por noche <br/>
              <FontAwesome className="fas fa-bed" name="bed" size="1x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {bestap.camas} |  <FontAwesome className="fas fa-bath" name="bath" size="1x" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {bestap.banios} | 
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
}
 
export default BestApar;