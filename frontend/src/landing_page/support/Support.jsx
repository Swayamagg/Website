import React from "react";
import '../support.css'

function Support() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-8">
          <div
            class="accordion"
            id="accordionExample"
            style={{ width: "800px", marginLeft: "2rem" }}
          >
            <div class="accordion-item mt-5">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  Account Opening
                  <i class="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Resident individual</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Minor</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Non Resident Indian (NRI)</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Company, Partnership, HUF and LLP</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Glossary</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item mt-4 border-top">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  Your Zerodha Account
                  <i class="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Your Profile</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Account modification</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>
                        Client Master Report (CMR) and Depository Participant
                        (DP)
                      </li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Nomination</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Transfer and conversion of securities</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>

            <div class="accordion-item mt-4 border-top">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  Kite
                  <i class="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>IPO</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Trading FAQs</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Margin Trading Facility (MTF) and Margins</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Charts and orders</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Alerts and Nudges</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>General</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mt-4 border-top">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  Funds
                  <i class="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Add money</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Withdraw money</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Add bank accounts</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>eMandates</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item mt-4 border-top">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  Console
                  <i class="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body"></div>
                <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#397DD0" }}
                  >
                    <li>Portfolio</li>
                  </a>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#397DD0" }}
                  >
                    <li>Corporate actions</li>
                  </a>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#397DD0" }}
                  >
                    <li>Funds statement</li>
                  </a>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#397DD0" }}
                  >
                    <li>Reports</li>
                  </a>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#397DD0" }}
                  >
                    <li>Profile</li>
                  </a>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#397DD0" }}
                  >
                    <li>Segments</li>
                  </a>
                </ul>
              </div>
            </div>
            <div class="accordion-item mt-4 mb-5 border-top">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  Coin
                  <i class="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Mutual Funds</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>National Pension Scheme(NPS)</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Fixed Deposit(FD)</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Features on Coin</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>Payments and Orders</li>
                    </a>
                    <a
                      href=""
                      style={{ textDecoration: "none", color: "#397DD0" }}
                    >
                      <li>General</li>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="conatiner col-4 mt-4 ">
          <div className="p-3 w-90 ms-2 border-start border-warning border-5" style={{ background: "#fff8f0",padding:"20px 12px",margin:"20px" }}>
            <ul style={{color:"#397dd0"}}>
              <li><a href="" style={{color:"#397DD0"}} >Surveillance measure on scrips - September 2025</a></li>
              <li className="mt-3"><a href="" style={{color:"#397DD0"}} >Offer for sale (OFS) – September<br/>2025</a></li>
            </ul>
          </div>
          <div className="card mx-2 w-90">
              <div className="card-header border-bottom py-3" style={{backgroundColor:"#F6F6F6"}}>
                <h6 className="mb-0">Quick links</h6>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item mt-2 mb-2">
                <a href="#"   style={{ color: "#397DD0",textDecoration:"none" }}>1. Track account opening</a><br/>
                </li>
                <li className="list-group-item mb-2">
                <a href="#"    style={{ color: "#397DD0",textDecoration:"none" }}>2. Track segment activation</a><br/>
                </li>
                <li className="list-group-item mb-2"><a href="#" style={{ color: "#397DD0",textDecoration:"none" }}>3. Intraday margins</a><br/></li>
                <li className="list-group-item mb-2"><a href="#" style={{ color: "#397DD0",textDecoration:"none" }}>4. Kite user manual</a></li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Support;
