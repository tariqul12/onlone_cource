import React from 'react';
import './Header.css';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logo from './../../images/logo (1).png';
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={Logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/jobs" style={({ isActive }) =>{
             return {color: isActive ? '#309532' : ''}}}>jobs</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/success">Success Story</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">All Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/blog">Blog</NavLink>
        </li>
       
       
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
            </div>
        </div>
    );
};

export default Header;