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
          src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/banners%2Fbanners2.png?alt=media&token=035da031-1e39-4652-9ac8-2775abd44956"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/best-at-3697b.appspot.com/o/banners%2Fbanners3.png?alt=media&token=87504ed3-1b19-4d11-b202-c06bb7804e18"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>  
  )
}

export default Car;