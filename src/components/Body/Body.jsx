import React, { Component } from "react";

export default class Body extends Component {
  render() {
    return (
      <div className='container my-5'>
        <div className='row'>
          {/* First Div */}
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-8'>
                <h3>Every student matters</h3>
                <p>
                  Get your doubts clarified and attend live classes in the
                  language of your choice
                </p>
                <div className='input-group mb-3'>
                  <input
                    type='text'
                    className='form-control '
                    placeholder='search your doubt here'
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                  />
                  <div className='input-group-prepend'>
                    <span className='input-group-text ' id='basic-addon1'>
                      <i className='fa fa-search'></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second Div */}
          <div className='col-md-6'>
            <div className='embed-responsive embed-responsive-21by9'>
              <iframe
                className='embed-responsive-item'
                title='Video'
                src='https://www.youtube.com/embed/zpOULjyy-n8?rel=0'
              ></iframe>
            </div>
            <div className='row my-2'>
              <div className='col-md-6 col-6'>
                <div className='d-flex  align-items-center'>
                  <i
                    className='fa fa-book fa-lg p-2'
                    style={{ color: "#0275d8" }}
                    aria-hidden='true'
                  ></i>
                  <h6 style={{ color: "#0275d8" }}>10,00,000 video lectures</h6>
                </div>
              </div>
              <div className='col-md-6 col-6 '>
                <div className='d-flex align-items-center'>
                  <i
                    className='fa fa-users fa-lg p-2'
                    style={{ color: "#0275d8" }}
                    aria-hidden='true'
                  ></i>
                  <h6 className='' style={{ color: "#0275d8" }}>
                    Students
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
