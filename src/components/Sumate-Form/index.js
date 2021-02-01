import React from "react";
import { firestore } from '../../firebase/utils'
import { Modal } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import "./style.css";

const SumateForm = props => {
  const { register, errors, handleSubmit } = useForm();
  
  const newFormDep = dep => {
    firestore.collection("bestformdep").add({
      ...dep,
      createdAt: new Date()
    })
    alert("¡Muchas gracias! Nos pondremos en contacto contigo a la brevedad :-)");
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Dejanos tus datos y te contactamos</Modal.Title>
      </Modal.Header>
      <div className='sumate-formulario'>
        <form onSubmit={handleSubmit(newFormDep)}>
          <div className="form-group">
            <label className="control-label">Dirección del inmueble</label>
            <input className="form-control" name="direccion" ref={register({required: true})} placeholder="Ej.: XXXXX" />
          </div>
          <div className="form-group">
            <label className="control-label">Barrio</label>
            <input className="form-control" name="barrio" ref={register({required: true})} placeholder="Ej.: ZZZZZ" />
          </div>
          <div className="form-group">
            <label className="control-label">Provincia</label>
            <input className="form-control" name="provincia" ref={register({required: true})} placeholder="Ej.: YYYYY" />
          </div>
          <div className="form-group">
            <label>Plataformas en las que está publicado:</label>
            <input className="form-control" name="plataformas" ref={register} placeholder="Ej.: Airbnb, Booking, etc." />
          </div>
          <div className="form-group">
            <label>¿Tenés fotos profesionales?</label>
            <select className="form-control" name="fotos-pro" ref={register}>
              <option type="radio" value="si" >Si</option>
              <option type="radio" value="no" >No</option>
              <option type="radio" value="no" >No, pero me gustaría</option>
            </select>
          </div>
          <div className="form-group">
            <label>Descripción:</label>
            <textarea rows="3" className="form-control" name="descripcion" ref={register} placeholder="Danos una breve descripción de los espacios y
      amoblamientos de tu inmueble..."/>
          </div>
          <div className="form-group">
            <label>¿Recibiste huéspedes anteriormente?</label>
            <select className="form-control" name="antecedentes" ref={register({required: true})}>
              <option type="radio" value="si" >Si</option>
              <option type="radio" value="no" >No</option>
            </select>
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input className="form-control" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} placeholder="Email" />
          </div>
          <div className="form-group">
            <label className="control-label">Teléfono</label>
            <input className="form-control" name="telefono" ref={register({required: true, minLength: 6, maxLength: 14})} placeholder="Teléfono" />
          </div>
          <button id="submit-btn" type="submit"
          onClick={props.onHide}>Enviar</button>
          {(errors.direccion || errors.barrio || errors.provincia || errors.email || errors.telefono) ? alert("Campos incompletos.") : null}
        </form>
      </div>
    </Modal>
  );
};

export default SumateForm;
