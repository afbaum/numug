import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div className="container-fluid">
            <button type="button" className="btn btn-secondary btn-lg" data-toggle="modal"
              data-target="#loginModal">Login</button>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarList">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarList">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Conference'>Confrence</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='./PositionPaper'>Position Papers</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/ControlledInput'>Forum</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/Archive'>Presentation Archive</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About Us</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;
