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
      <MDBCard>
        <MDBCardBody>
        {posts && posts.map(bestpost => (
          <MDBRow>
            <MDBCol>
              <MDBView hover className='rounded z-depth-1-half'>
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
              <h3>{bestpost.titulo}</h3>
              {bestpost.intro.slice(0,200)}...
              <p className="info-autor">
                Escrito por <a href='#!'>{bestpost.autor}</a>, {bestpost.fecha}
              </p>
              <a href={`/blog/${bestpost.id}`}>
                <MDBBtn color='primary'>
                  Leer más...
                </MDBBtn>
                <MDBMask overlay='white-slight' />
              </a>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBCardBody>
    </MDBCard>
    </div>
  );
};

export default Blog;
