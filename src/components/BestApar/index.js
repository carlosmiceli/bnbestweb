import  React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import FontAwesome from 'react-fontawesome';

const BestApar = props => {

  return (
    <div className="contenedorP" >
      {props.deptos.map((bestap)=>
        <Card>
          <Card.Img variant="top" src={bestap.fotos[0]} />
          <Card.Body>
            <Card.Title key={bestap.id}>{bestap.titulo}</Card.Title>
            <Card.Text>
              Desde ${bestap.precio} por noche <br/>
              <FontAwesome className="fas fa-bed" name="bed" size="lg" style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/> {bestap.personas}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      <Card style={{width: "15%"}}>
        <a href="/departamentos">
          <Card.Img className="ver-mas" src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/right-arrow.png?alt=media&token=8513e071-bf40-4a50-92ed-eba42b67576a" />
        </a>
      </Card>
    </div>
  );
}
 
export default BestApar;