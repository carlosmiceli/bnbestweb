import React from 'react';
import Car from '../../components/Carousel';
import About from '../../components/About';
import Pasos from '../../components/Pasos';
import AparLand from '../../components/AparLand';
import ValoracionesLand from '../../components/ValoracionesLand';
import Sumate from '../../components/Sumate';

const Homepage = props => {
    return (
        <div>
                <Car/>
                <About/>
                <Pasos/>
                <AparLand/>
                <ValoracionesLand/>
                <Sumate/>
        </div>
    )
}

export default Homepage