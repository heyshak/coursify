import React, { Component } from "react";

export default class FreeSolution extends Component {
  render() {
    return (
      <div className='container my-5'>
        <h3 className='my-3'>Free Solutions</h3>
        <div className='row'>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-text text-center '>NCERT</h4>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-text text-center '>NCERT Exampler</h4>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-text text-center '>Refernce Book</h4>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <div className='card-body'>
                <h4 className='card-text text-center '>Exam Prep Material</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
