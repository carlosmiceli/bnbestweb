import React, { useState, useEffect } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn
} from "mdbreact";
import { firestore } from './../../firebase/utils'
import "./style.css";

const Blog = () => {

  // let objFecha = new Date()
  // let day = objFecha.getUTCDate();
  // let month = objFecha.getUTCMonth() + 1;
  // let year = objFecha.getUTCFullYear();
  
  // const Fecha = day + "/" + month + "/" + year

  const [posts, setPosts] = useState([]);

  useEffect (() => {
    firestore
    .collection("bestblog")
    .get()
    .then(res => {
      const tempPosts = []
      res.forEach(post => {
        tempPosts.push(post.data())
      })
      setPosts(tempPosts)
      
    })
    .catch(err => console.log(err))
  }, [])

console.log("1", posts)

  return (
    <div className='cont-blog'>
      <h1 className="page-title">Blog de Best</h1>
      <MDBCard className='my-5 px-5 pb-5'>
        <MDBCardBody>
        {posts && posts.map(bestpost => (
          <MDBRow>
            <MDBCol lg='5' xl='4'>
              <MDBView hover className='rounded z-depth-1-half mb-lg-0 mb-4'>
                <img
                  className='img-fluid'
                  src={bestpost.foto}
                  alt=''
                />
                <a href={`/blog/${bestpost.id}`}>
                  <MDBMask overlay='white-slight' />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg='7' xl='8'>
              <h3 className='mb-3 p-0'>{bestpost.titulo}</h3>
              <div className='dark-grey-text'>
                {bestpost.contenido[0].slice(0,200)}...
              </div>
              <p>
                Escrito por <a href='#!'>María Betsabé Juarez Ypa</a>, {bestpost.fecha}
              </p>
              <MDBBtn color='primary' size='md'>
                Leer más...
              </MDBBtn>
            </MDBCol>
          </MDBRow>
           ))}
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Blog;
