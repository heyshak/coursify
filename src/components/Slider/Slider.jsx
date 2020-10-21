import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div className='container my-5'>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>LIVE CLASSES</h5>
                <p className='card-text text-center'>
                  Learn live from the best tutor in India
                </p>

                <button className='btn btn-primary btn-block rounded-pill'>
                  Book Now
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>EARN CASH</h5>
                <p className='card-text text-center'>
                  Answer the question and earn money
                </p>

                <button className='btn btn-primary btn-block rounded-pill'>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>EXAM PREPARATION</h5>
                <p className='card-text text-center'>
                  JEE Mains / JEE Advanced / NEET
                </p>

                <button className='btn btn-primary btn-block rounded-pill'>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>SAMPLE TEST</h5>
                <p className='card-text text-center'>
                  Tests with detailed analysis national ranking
                </p>

                <button className='btn btn-primary btn-block rounded-pill'>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
