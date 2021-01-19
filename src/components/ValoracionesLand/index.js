import React from 'react';
import HomeReviews from '../HomeReviews/index';
import './style.css';

const ValoracionesLand = () => {
    return ( 
        <div className="cont-review">
            <div className="titulo-review">
                <h2 className="titulo_review1">Nuestros</h2>
                <h2 className="titulo_review2">HUÉSPEDES BEST</h2>
            </div>
            <div className="reviews">
                <HomeReviews/>
            </div> 
        </div>
    )
}
 
export default ValoracionesLand;