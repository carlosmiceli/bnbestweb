import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, NavDropdown } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom"
import SumateForm from "../Sumate-Form"; 
import "./style.css";

const NavB = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <Navbar fixed='top'>
        <img
        className='logo'
        src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/logos%2Flogo_blanco.jpg?alt=media&token=da0be96e-c5b6-4e81-a937-8223e0acfc44'
        alt=''
      ></img>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <NavDropdown id="basic-nav-dropdown" className="content-mobile">
        <NavDropdown.Item className='link-nav'
          href='/'
        >
          Inicio</NavDropdown.Item>
        <NavDropdown.Item className='link-nav'
          href='/departamentos'
        >
          Departamentos</NavDropdown.Item>
        <a className='link-nav dropdown-item'
          onClick={handleShow}>Sumá Tu Propiedad
        </a>
        <NavDropdown.Item className='link-nav'
          href='/experiencias'
        >
          Experiencias</NavDropdown.Item>
        <NavDropdown.Item className='link-nav'
          href='/faq'
        >
          Faq</NavDropdown.Item>
          <NavDropdown.Item className='link-nav'
          href='/blog'
        >
          Blog</NavDropdown.Item>
      </NavDropdown>
      </Navbar.Collapse>
      <Nav>
        <NavLink
          className='link-nav'
          to='/'
        >
          Inicio
        </NavLink>
        <NavLink
          className='link-nav'
          to='/departamentos'
        >
          Departamentos
        </NavLink>
        <a
          className='link-nav'
          onClick={handleShow}
        >
          Sumá Tu Propiedad
        </a>
        <NavLink
          className='link-nav'
          to='/experiencias'
        >
          Experiencias
        </NavLink>
        <NavLink
          className='link-nav'
          to='/faq'
        >
          Faq
        </NavLink>
        <NavLink
          className='link-nav'
          to='/blog'
        >
          Blog
        </NavLink>
      </Nav>
      <div id="button-container">
      <Button
          id='btn_r'
          variant='contained'
          color='primary'
          href='https://api.whatsapp.com/send?phone=+5493813040583'
          target='_blank'
        >
          Reservar
      </Button>
      </div>
      <SumateForm show={show} onHide={handleClose} />
    </Navbar>
  );
};

export default NavB;
