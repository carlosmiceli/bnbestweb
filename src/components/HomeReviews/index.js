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
              <h3 className="nombre-reviewer">Hola</h3>
              <p className="texto-test">Mi nombre es Alejandra, tengo 22 años y desde que yo me acuerdo padecí cierto grado de sobrepeso. La verdad es que al inicio ni siquiera te das cu</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <h3 className="nombre-reviewer">Hola</h3>
              <p className="texto-test">Mi nombre es Alejandra, tengo 22 años y desde que yo me acuerdo padecí cierto grado de sobrepeso. La verdad es que al inicio ni siquiera te das cu</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <h3 className="nombre-reviewer">Hola</h3>
              <p className="texto-test">Mi nombre es Alejandra, tengo 22 años y desde que yo me acuerdo padecí cierto grado de sobrepeso. La verdad es que al inicio ni siquiera te das cu</p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default HomeReviews;