import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import './style.css';

const HomeReviews = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <h3 className="texto-test">Muy buena atención y respuesta pronta. El departamento hermoso y luminoso. Nos sentimos muy cómodos. Totalmente recomendable, seguramente volveremos a alojarnos allí. Muchas gracias!</h3>
              <p className="nombre-reviewer">Malena, Buenos Aires, Argentina</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <h3 className="nombre-reviewer">Rodrigo, San Miguel de Tucumán, Argentina</h3>
              <p className="texto-test">Exactamente como en las fotos, muy limpio, respuesta rápida del encargado y horario de salida flexible.</p>
              <br/>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <h3 className="nombre-reviewer">Marcelo, São Paulo, Brasil</h3>
              <p className="texto-test">Apartamento muito bem localizado, aconchegante, sem faltar nada do que é necessário para uma boa estadia. Recomendamos!</p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default HomeReviews;