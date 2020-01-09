import React from 'react';
import { Carousel } from 'react-bootstrap';
import Slide01 from './../../../assets/home-slide01.png';
import Slide02 from './../../../assets/home-slide02.png';
import Slide03 from './../../../assets/home-slide03.png';
import './slider.scss';
const Slider = () => (
  <Carousel fade={true} interval={3000} controls={false} pauseOnHover={false}>
    <Carousel.Item className='slide01'>
      <img
        className="d-block w-100"
        src={Slide01}
        alt="OPTIMIZE"
      />
    </Carousel.Item>
    <Carousel.Item className='slide02'>
      <img
        className="d-block w-100"
        src={Slide02}
        alt="OPTIMIZE"
      />
    </Carousel.Item>
    <Carousel.Item className='slide03'>
      <img
        className="d-block w-100"
        src={Slide03}
        alt="OPTIMIZE"
      />
    </Carousel.Item>
  </Carousel>
)
export default Slider;
