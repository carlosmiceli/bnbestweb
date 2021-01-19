import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./style.css";

const SumateForm = props => {

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Dejanos tus datos y te contactamos</Modal.Title>
      </Modal.Header>
      <div className='sumate-formulario'>
        <Form >
          <Form.Group controlId='direccion'>
            <Form.Control
              type='text'
              placeholder='Dirección del inmueble'
            />
          </Form.Group>
          <Form.Group controlId='barrio'>
            <Form.Control type='text' placeholder='Barrio' />
          </Form.Group>
          <Form.Group controlId='provincia'>
            <Form.Control type='text' placeholder='Provincia' />
          </Form.Group>
          <Form.Group controlId='plataformas-select'>
            <Form.Label>Plataformas en las que está publicada:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej.: Airbnb, Booking, etc.'
            />
          </Form.Group>
          <Form.Group controlId='fotos-profesionales'>
            <Form.Label>¿Tenés fotos profesionales?</Form.Label>
            <Form.Check
              label='Sí'
              type='radio'
              name='fotos'
              id='fotos-afirmativo'
            />
            <Form.Check
              label='No'
              type='radio'
              name='fotos'
              id='fotos-negativo'
            />
          </Form.Group>
          <Form.Group controlId='descripción-departamento'>
            <textarea
              class='form-control'
              type='text'
              placeholder='Danos una breve descripción de los espacios y
    amoblamientos de tu inmueble...'
              rows='5'
            ></textarea>
          </Form.Group>
          <Form.Group controlId='antecedentes'>
            <Form.Label>
              ¿Recibiste huéspedes anteriormente o sos nuevo en esto?
            </Form.Label>
            <Form.Check
              label='Sí'
              type='radio'
              name='huespedes'
              id='antecedentes-afirmativo'
            />
            <Form.Check
              label='No'
              type='radio'
              name='huespedes'
              id='antecedentes-negativo'
            />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Control type='email' placeholder='Email' />
          </Form.Group>
          <Form.Group controlId='telefono'>
            <Form.Control type='text' placeholder='Teléfono de contacto' />
          </Form.Group>
        </Form>
      </div>
      <Modal.Footer>
        <Button id="submit-btn" onClick={props.onClick}>
          Enviar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SumateForm;
