import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './style.css';

const Car = () => {
  return (
  <div>
    <Carousel className="w-100">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/banners%2FBanners%20(1).png?alt=media&token=08562987-fe26-42dc-b0fe-9b056e4bbea7"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/banners%2FBanners%20(2).png?alt=media&token=c23df994-806d-4a2e-ac7f-a5d89128b7b4"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/banners%2Fbanners2.png?alt=media&token=035da031-1e39-4652-9ac8-2775abd44956"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>  
  )
}

export default Car;