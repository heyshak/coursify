import React, { Component } from "react";
import Slider from "react-slick";
import math from "../../assests/math.jpg";
import biology from "../../assests/biology.jpg";
import physcis from "../../assests/physics.jpg";
import chemistry from "../../assests/chemistry.jpg";
import coding from "../../assests/coding.jpg";
import languages from "../../assests/language.jpg";
import english from "../../assests/english2.jpg";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className='my-5 container'>
        <h3 className='my-3'>Explore Our Subjects</h3>
        <Slider {...settings} className='' arrows={false} autoplay={true}>
          <div>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={math} alt='math' />

                <h4 className='card-text text-center '>Maths</h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={biology} alt='math' />

                <h4 className='card-text text-center '>Biology</h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={physcis} alt='math' />

                <h4 className='card-text text-center '>Physics</h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={coding} alt='math' />

                <h4 className='card-text text-center '>Coding</h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={languages} alt='math' />

                <h4 className='card-text text-center '>Languages</h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={chemistry} alt='math' />

                <h4 className='card-text text-center '>Chemistry</h4>
              </div>
            </div>
          </div>

          <div className=''>
            <div className='card'>
              <div className='card-body'>
                <img className='card-img-top' src={english} alt='math' />

                <h4 className='card-text text-center '>English</h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
