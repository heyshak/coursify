import React, { Component } from "react";
import board from "../../assests/board-exams.jpg";
import neet from "../../assests/neet-ug.jpg";
import jee from "../../assests/jee-main.jpg";
export default class ExamAce extends Component {
  render() {
    return (
      <div className='container my-5'>
        <h3 className='my-3'>Exams that you can ace with coursify</h3>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <img
                className='card-img-top border-bottom'
                src={board}
                alt='card'
              />
              {/* <div className='card-body'>
                <h5 className='card-title'>Board Exams</h5>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div> */}
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                className='card-img-top border-bottom'
                src={neet}
                alt='card'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <img
                className='card-img-top border-bottom'
                src={jee}
                alt='card'
                style={{ height: "235px" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
