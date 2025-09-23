import React from "react";

const CircleIcon = ({ icon }) => {
  const styles = {
    color: "#397DD0",
    fontSize: "18px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f0ff",
    width: "40px",
    height: "40px",
    flexShrink: 0,
    borderRadius: "50%",
    marginRight: "12px",
  };

  return (
    <div style={styles}>
      <i className={icon}></i>
    </div>
  );
};

function Links() {
  return (
    <div className="container">
      <div className="row">
        {/* Left Side Accordion */}
        <div className="col-8 mb-5">
          <div className="accordion" id="accordionExample" style={{ width: "800px", marginLeft: "2rem" }}>

            {/* Account Opening */}
            <div className="accordion-item mt-5">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                >
                  <div className="d-flex align-items-center">
                    <CircleIcon icon="fa fa-plus" />
                    Account Opening
                  </div>
                  <i className="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Resident individual</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Minor</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Non Resident Indian (NRI)</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Company, Partnership, HUF and LLP</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Glossary</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Your Zerodha Account */}
            <div className="accordion-item mt-4 border-top">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                >
                  <div className="d-flex align-items-center">
                    <CircleIcon icon="fa fa-user" />
                    Your Zerodha Account
                  </div>
                  <i className="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Your Profile</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Account modification</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Client Master Report (CMR) and Depository Participant (DP)</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Nomination</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Transfer and conversion of securities</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kite */}
            <div className="accordion-item mt-4 border-top">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                >
                  <div className="d-flex align-items-center">
                    <CircleIcon icon="fa fa-compass" />
                    Kite
                  </div>
                  <i className="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>IPO</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Trading FAQs</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Margin Trading Facility (MTF) and Margins</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Charts and orders</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Alerts and Nudges</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>General</a></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Funds */}
            <div className="accordion-item mt-4 border-top">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                >
                  <div className="d-flex align-items-center">
                    <CircleIcon icon="fa-solid fa-indian-rupee-sign" />
                    Funds
                  </div>
                  <i className="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Add money</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Withdraw money</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Add bank accounts</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>eMandates</a></li>
                  </ul>
                </div>
              </div>
            </div>
             <div className="accordion-item mt-4 border-top">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                >
                  <div className="d-flex align-items-center">
                    <CircleIcon icon="fa-regular fa-circle" />
                    Console
                  </div>
                  <i className="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Portfolio</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Corporate actions</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Funds Statements</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Reports</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Profiles</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Segemnts</a></li>
                  </ul>
                </div>
              </div>
            </div>
             <div className="accordion-item mt-4 border-top">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button collapsed d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                >
                  <div className="d-flex align-items-center">
                    <CircleIcon icon="fa-brands fa-bitcoin"/>
                    Coin
                  </div>
                  <i className="bi bi-chevron-down ms-auto chevron"></i>
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <ul style={{ fontSize: "17px", lineHeight: "2.7" }}>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Mutual funds</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>National Pension Scheme (NPS)</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Fixed Deposit (FD)</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Features on Coin</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>Payments and Orders</a></li>
                    <li><a href="" style={{ textDecoration: "none", color: "#397DD0" }}>General</a></li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side Quick Links */}
        <div className="container col-4 mt-4">
          <div className="p-3 w-90 ms-2 border-start border-warning border-5" style={{ background: "#fff8f0", padding: "20px 12px", margin: "20px" }}>
            <ul style={{ color: "#397dd0" }}>
              <li><a href="" style={{ color: "#397DD0" }}>Surveillance measure on scrips - September 2025</a></li>
              <li className="mt-3"><a href="" style={{ color: "#397DD0" }}>Offer for sale (OFS) – September 2025</a></li>
            </ul>
          </div>

          <div className="card mx-2 w-90">
            <div className="card-header border-bottom py-3" style={{ backgroundColor: "#F6F6F6" }}>
              <h6 className="mb-0">Quick links</h6>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><a href="#" style={{ color: "#397DD0", textDecoration: "none" }}>1. Track account opening</a></li>
              <li className="list-group-item"><a href="#" style={{ color: "#397DD0", textDecoration: "none" }}>2. Track segment activation</a></li>
              <li className="list-group-item"><a href="#" style={{ color: "#397DD0", textDecoration: "none" }}>3. Intraday margins</a></li>
              <li className="list-group-item"><a href="#" style={{ color: "#397DD0", textDecoration: "none" }}>4. Kite user manual</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
