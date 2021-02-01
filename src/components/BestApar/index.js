import  React from 'react';
import './style.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed } from '@fortawesome/free-solid-svg-icons'

const BestApar = props => {

  return (
    <div className="contenedorP" >
      {props.deptos.map((bestap)=>
        <Card>
                    <a href={`/departamentos/${bestap.id}`}>
          <Card.Img variant="top" src={bestap.fotos[0]} />
          <Card.Body>
            <Card.Title key={bestap.id}>{bestap.titulo}</Card.Title>
            <Card.Text>
              Desde ${bestap.precio} por noche <br/>
              <FontAwesomeIcon icon={faBed} /> {bestap.personas}
            </Card.Text>
          </Card.Body>
          </a>
        </Card>
      )}
      {props.showArrow && 
      <Card style={{width: "15%" }} className="ver-mas">
        <a href="/departamentos">
          <Card.Img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/right-arrow.png?alt=media&token=8513e071-bf40-4a50-92ed-eba42b67576a" />
        </a>
      </Card>
      }
    </div>
  );
}
 
export default BestApar;