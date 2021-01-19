import React from 'react';
import Car from '../../components/Carousel';
import About from '../../components/About';
import Pasos from '../../components/Pasos';
import AparLand from '../../components/AparLand';
import ValoracionesLand from '../../components/ValoracionesLand';
import Sumate from '../../components/Sumate';
// import SimpleReactLightbox from 'simple-react-lightbox'


const Homepage = props => {
    return (
        <div>
            {/* <SimpleReactLightbox> */}
                <Car/>
                <About/>
                <Pasos/>
                <AparLand/>
                <ValoracionesLand/>
                <Sumate/>
            {/* </SimpleReactLightbox> */}
        </div>
    )
}

export default Homepage