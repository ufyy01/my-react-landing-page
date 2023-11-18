import React from 'react';
import './Navbar.css';
import { Logo} from '../../asset';

const Navbar = () => {
    return ( 
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-10">
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#"><img src={Logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Find a Doctor</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Apps</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Testimonials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Us</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1 col-xl-1"></div>
      </div>
    </React.Fragment>
    );
}

export default Navbar;