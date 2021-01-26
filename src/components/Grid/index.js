import React from 'react';
import './style.css';
import { SRLWrapper } from 'simple-react-lightbox';

const Grid = props => {
  
  const options = {
    settings: {
      autoplaySpeed: 3500,
    },
    buttons: {
      showDownloadButton: false,
    },
    caption: {
      showCaption: false,
    }
  };

  return ( 
    <SRLWrapper options={options}>
      {props.fotos && 
      <div className="grid">
        <div className="cuadro">
          <img className="img-cover" alt="" src={props.fotos[0]} key={props.fotos[0]}></img>
          <div className="grid-fotos">
            {props.fotos.slice(1, 4).map(foto => (
              <img className="img-chica" alt="" src={foto} key={foto}></img>
            ))}
            {props.fotos[4] &&
              <div className="position-button">
                <img className="img-chica" alt="" src={props.fotos[4]} key={props.fotos[4]}></img>
                {props.fotos[5] &&
                  <button className="masfotos">
                    Ver más fotos
                  </button>
                }
              </div>
            }
            {props.fotos[5] && props.fotos.slice(5).map(foto => (
              <img style={{display: "none"}} alt="" src={foto} key={foto}></img>
            ))}           
          </div>
        </div>  
      </div>
      }
    </SRLWrapper>
  );
}
 
export default Grid;