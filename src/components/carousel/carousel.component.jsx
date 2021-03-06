import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import slide3 from '../../assets/img/carousel/slide3.jpg'
import ScrollDown from "../scroll-down/scroll-down.component";
import './carousel.style.css'

const MyCarousel = () => {
    return (
        <div>
             <Carousel controls={false} indicators interval={2500} pause={false}>   
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
        </div>
    )
}

export default MyCarousel
