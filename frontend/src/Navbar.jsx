import React from "react";
import "../public/styles/index.css"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#fff"}}>
        <div className="container">
          <a className="navbar-brand p-2" href="#">
            <img src="/images/logo.svg" alt="logo_img" style={{width:"25%"}}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#">
                    Support
                  </a>
                </li>
                    
                    
            </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
