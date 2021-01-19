import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll'

const NavB = () => {
  
  return (
    <Navbar fixed='top'>
        <img
        className='logo'
        src='https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/logos%2Flogo_blanco.jpg?alt=media&token=da0be96e-c5b6-4e81-a937-8223e0acfc44'
        alt=''
      ></img>
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
        <Link
          to="scroll-sumate" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className='link-nav'
        >
          Sumá Tu Propiedad
        </Link>
        <NavLink
          className='link-nav'
          to='/faqs'
        >
          Faqs
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
          href='https://api.whatsapp.com/send?phone=54381040583'
          target='_blank'
        >
          Reservar
      </Button>
      </div>
    </Navbar>
  );
};

export default NavB;
