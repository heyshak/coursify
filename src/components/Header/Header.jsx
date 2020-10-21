import React, { Component } from "react";
import logo from "../../logo.svg";

export default class Header extends Component {
  state = {
    isNavCollapsed: true,
  };

  handleNavCollapse = () => {
    this.setState({ isNavCollapsed: !this.state.isNavCollapsed });
  };
  render() {
    const windowWidht = window.innerWidth;

    return (
      <div>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <a className='navbar-brand' href='/'>
            <img
              src={logo}
              width={windowWidht <= 375 ? 30 : 70}
              height={windowWidht <= 375 ? 30 : 70}
              alt=''
            />
            Coursify
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded={!this.state.isNavCollapsed ? true : false}
            aria-label='Toggle navigation'
            onClick={this.handleNavCollapse}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className={`${
              this.state.isNavCollapsed ? "collapse" : ""
            } navbar-collapse`}
            id='navbarNav'
          >
            <ul className={`navbar-nav ml-auto`}>
              <li className='nav-item active'>
                <a className='nav-link' href='/'>
                  Board <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Books
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Exams
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/'>
                  Why Us?
                </a>
              </li>
              <li className='nav-item'>
                <button className='btn btn-primary  rounded-pill' href='/'>
                  Signup
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
