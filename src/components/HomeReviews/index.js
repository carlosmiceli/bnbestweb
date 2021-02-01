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
        >
          <MDBCarouselInner>
          <div className="home-reviews">
            <MDBCarouselItem itemId="1">
              <MDBView>
                <h3 className="texto-test">Muy buena atención y respuesta pronta. El departamento hermoso y luminoso. Nos sentimos muy cómodos. Totalmente recomendable, seguramente volveremos a alojarnos allí. Muchas gracias!</h3>
                <p className="nombre-reviewer">Malena, Buenos Aires, Argentina</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
              <h3 className="texto-test">Muchísimas gracias por responder rapido y por la atención! Tienen el proceso super aceitado!!</h3>
                <p className="nombre-reviewer">Luis, San Miguel de Tucumán, Argentina</p>
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
              <h3 className="texto-test">Apartamento muito bem localizado, aconchegante, sem faltar nada do que é necessário para uma boa estadia. Recomendamos!</h3>
                <p className="nombre-reviewer">Marcelo, São Paulo, Brasil</p>   
              </MDBView>
            </MDBCarouselItem>
            </div>
          </MDBCarouselInner>
        </MDBCarousel>
       
      </MDBContainer>

  );
}

export default HomeReviews;