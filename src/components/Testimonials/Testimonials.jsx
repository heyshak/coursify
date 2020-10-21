import React, { Component } from "react";
import sunder from "../../assests/sunderpichai.jpg";
import mukesh from "../../assests/mukeshambani.jpg";
export default class Testimonials extends Component {
  render() {
    return (
      <div className='container'>
        <h3>Testimonials</h3>
        <div className='row my-5'>
          <div className='col-md-4'>
            <div className='card'>
              <img className='card-img-top' src={sunder} alt='mark' />
            </div>
          </div>
          <div className='col-md-8'>
            <p>
              <strong>Hi, I am Sunder.</strong>
            </p>
            This is my testimonial for Coursify
            <p></p>
          </div>
        </div>
        <div className='row my-5'>
          <div className='col-md-4'>
            <div className='card'>
              <img className='card-img-top' src={mukesh} alt='mark' />
            </div>
          </div>
          <div className='col-md-8'>
            <p>
              <strong>Hi, I am Mukesh.</strong>
            </p>
            This is my testimonial for Coursify
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}
