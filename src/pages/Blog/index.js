import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import "./style.css";

const Blog = () => {

  let objFecha = new Date()
  let day = objFecha.getUTCDate();
  let month = objFecha.getUTCMonth() + 1;
  let year = objFecha.getUTCFullYear();
  
  const Fecha = day + "/" + month + "/" + year

  return (
    <div className='cont-blog'>
      <h1 className="page-title">Blog de Best</h1>
      <MDBCard className='my-5 px-5 pb-5'>
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg='5' xl='4'>
              <MDBView hover className='rounded z-depth-1-half mb-lg-0 mb-4'>
                <img
                  className='img-fluid'
                  src='https://mdbootstrap.com/img/Photos/Others/images/49.jpg'
                  alt=''
                />
                <a href='#!'>
                  <MDBMask overlay='white-slight' />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg='7' xl='8'>
              <h3 className='mb-3 p-0'>Título del artículo</h3>
              <p className='dark-grey-text'>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus...
              </p>
              <p>
                Escrito por <a href='#!'>María Betsabé Juarez Ypa</a>, {Fecha}
              </p>
              <MDBBtn color='primary' size='md'>
                Leer más...
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Blog;
