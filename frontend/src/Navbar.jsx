import React from "react";
import "../public/styles/index.css"

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#fff"}}>
        <div class="container">
          <a class="navbar-brand p-2" href="#">
            <img src="/images/logo.svg" alt="logo_img" style={{width:"25%"}}/>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " aria-current="page" href="#">
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
