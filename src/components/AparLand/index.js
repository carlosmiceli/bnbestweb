import React from 'react';
import './style.css';

const AparLand = () => {
    return ( 
        <div className="cont-al">
                <div className="inclined-bar"></div>
                    <h2 className="titulo-aparland1">CONOCÉ NUESTROS</h2>
                    <h2 className="titulo-aparland2">deptos Best</h2>
                <div className="inclined-bar"></div>
            <div className="container-fotos">
                <div className="secc">
                    <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2Fmono-chaca.jpg?alt=media&token=383129ae-5e8d-49bb-96ac-2fce6e34fa44" className="" alt="First"></img>
                    <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2Flavalle.jpg?alt=media&token=1a433304-f637-478d-8a06-1a4ca15fe471" className="" alt="Second"></img>
                </div>
                <div className="secc">
                    <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2Fcorrientes.jpg?alt=media&token=49ac2ed8-a65b-43f3-99b4-3947fdc3140e" className="" alt="Third"></img>
                    <img src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/apart-land%2F4chaca.jpg?alt=media&token=3044622a-d449-4f63-81c8-bc9a4f96ca7a" className="" alt="Fourth"></img>
                </div>
                <button className="button-al">VER TODOS</button>
            </div>
        </div>
    )
}
 
export default AparLand;