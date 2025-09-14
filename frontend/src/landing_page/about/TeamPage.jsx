import React from "react";

function TeamPage() {
  return (
    <>
      <div className="container">
        <div className="row text-center p-3 mb-3 ">
          <h2>People</h2>
        </div>
        <div
          className="row p-5 mt-5 text-muted fs-6 mx-5"
          style={{ lineHeight: "1.8", color: "#424242" }}
        >
            <div className="col-6 p-3 text-center">
                <img src="" style={{width:"50%",borderRadius:"100%"}} alt="my_img"/>
                <h5>Swayam Aggarwal</h5>
                <h6>Web Developer</h6>
            </div>
          <div className="col-6 p-3">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default TeamPage;
