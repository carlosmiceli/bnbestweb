import React, { Component } from "react";
import 'mdbreact/dist/css/mdb.css'
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";
import "./style.css";

class CollapsePage extends Component {
  state = {
    collapseID: "false"
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    return (
      <MDBContainer id='cont-faqs'>
        <MDBContainer id='cont-accordion' className='accordion md-accordion accordion-3 z-depth-1-half'>
          <h1 className='text-center text-uppercase red-text py-4 px-3'>
            Preguntas Frecuentes
          </h1>
          <MDBCard className='faqQuestion'>
            <h2>Horarios de check-in y check-out</h2>
            <MDBIcon
              icon={
                this.state.collapseID === "collapse1"
                  ? "angle-up"
                  : "angle-down"
              }
              className='red-text'
              size='2x'
              onClick={this.toggleCollapse("collapse1")}
            />
            <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>El ingreso es a partir de las 13hs en adelante. La salida es a las 11 am.</p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Cómo hago para reservar?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse2"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse2")}
              />
            <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
              <h4>1- ENVIÁNOS WHATSAPP</h4>
                <ul>
                  <li>Fecha</li> 
                  <li>Cantidad de huéspedes</li>
                  <li>Departamento favorito</li>
                </ul>
                <h4>2- VALIDÁ TUS DATOS</h4>
                <p>Mandános una foto de tu DNI (ambos lados) quién me espera para darme las llaves</p>
                <h4>3- ABONÁ LA SEÑA</h4>
                <p>Elegí el medio de pago y aboná el 20% del total.</p>
                <h4>4- HACÉ EL CHECK IN</h4>
                <p>Tu BEST HOST te espera desde las 13 hs para entregarte las llaves.</p>
                <h4>5- DISFRUTÁ TU ESTADIA</h4>
                <p>Check out hasta las 11 am.</p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Quién me espera para darme las llaves?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse3"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse3")}
              />
            <MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                El mismo día de tu reserva antes del mediodía tu BEST HOST se comunicara con vos para coordinar la entrega de llaves.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Puedo ingresar antes/después del horario?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse4"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse4")}
              />
            <MDBCollapse id='collapse4' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Podemos adelantar la hora de check inn, o, atrasar el check out según la disponibilidad el día previo o el día posterior. Por este motivo le podemos confirmar su petición la noche anterior a su ingreso en el caso del check inn, o, la misma mañana de su salida en el caso del check out.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Puedo retirarme antes/después del horario?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse5"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse5")}
              />
            <MDBCollapse id='collapse5' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Podemos adelantar la hora de check inn, o, atrasar el check out según la disponibilidad el día previo o el día posterior. Por este motivo le podemos confirmar su petición la noche anterior a su ingreso en el caso del check inn, o, la misma mañana de su salida en el caso del check out.
Su BEST HOST le explicara como hacer el check out.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Qué incluye el departamento?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse6"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse6")}
              />
            <MDBCollapse id='collapse6' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Todas nuestras propiedades están amuebladas y cuentan con AA, cocina completa, vajilla, et de electrodomésticos, WIFI, TV con Streaming (Netflix, Youtube) o cable dependiendo la unidad.
Algunas incluyen caja fuerte, plancha, secador de pelo, cafetera, entre otras cosas. 
Todas incluyen sábanas y toallas para tu estadía!
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Con cuánto tiempo de anticipación debo reservar?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse7"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse7")}
              />
            <MDBCollapse id='collapse7' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Puedes reservar en el mismo día, pero recomendamos, para una mejor atención un día previo. Con mayor antelación tendrás sin duda más variedad para hacer tu elección de inmueble.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Por cuánto tiempo puedo alquilar?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse8"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse8")}
              />
            <MDBCollapse id='collapse8' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Mínimo un día, máximo 90 días. Aunque hay algunas unidades donde el mínimo puede variar y ser de 2 o 3 días.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Cuáles son los medios de pago?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse9"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse9")}
              />
            <MDBCollapse id='collapse9' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Elegí tu medio de pago entre: Rapipago - Pagofacil - Transferencia o deposito bancario - Mercado pago (interés del 10%).
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Qué sucede si no puedo presentarme?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse10"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse10")}
              />
            <MDBCollapse id='collapse10' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Si avisas con 5 días o más de  anterioridad podemos reacomodar el día de tu reserva. Si el mismo dia no te presentas o no respondes nuestros mensajes no realizamos la devolución de la seña abonada.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Cómo puedo cancelar y con cuánto tiempo se devuelve la seña?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse11"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse11")}
              />
            <MDBCollapse id='collapse11' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Confiamos en que si realizas el pago de la seña estás seguro de necesitar la reserva. Por eso si cancelas con anterioridad 5 días o más, transferimos tu reserva a otras fechas. De lo contrario, no haremos la devolución de la seña abonada.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Qué sucede si me olvido una pertenencia?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse12"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse12")}
              />
            <MDBCollapse id='collapse12' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Avisanos con la mayor prontitud a nuestro whats app y a tu host. Asi coordinamos la devolución de tu pertenencia olvidada.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard className='faqQuestion'>
              <h2>¿Qué debo llevar al departamento?</h2>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse13"
                    ? "angle-up"
                    : "angle-down"
                }
                className='red-text'
                size='2x'
                onClick={this.toggleCollapse("collapse13")}
              />
            <MDBCollapse id='collapse13' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                Solo tu ropa y artículos de higiene personal.
                </p>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </MDBContainer>
    );
  }
}

export default CollapsePage;
