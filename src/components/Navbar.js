import React from 'react';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/navbar.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
//logo
import logo from './assets/images/DSC Light.png';

const Navbar=()=>{
return(
    <nav className="navbar navbar-expand-lg navbar-light ">
  <a className="navbar-brand" href="#"><img src={logo} className="dsclogo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
      <li className="nav-item ">
        <a className="nav-link active" href="#">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Team</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Events</a>
      </li>
      <li className="nav-item events-link">
        <a className="nav-link " href="#">CoviHack'21</a>
      </li>
    </ul>
  </div>
</nav>
);
}
export default Navbar;