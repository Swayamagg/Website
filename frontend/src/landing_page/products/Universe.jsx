import React from "react";

function Universe() {
  return (
    <>
      <div className="container mt-5 p-5 center" >
        <div className="row text-center ">
          <h1
            style={{ marginTop: "34px", fontSize: "1.5rem", color: "#424242" }}>
            The Zerodha Universe
          </h1>
          <p className="mt-4 mb-3">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
         <div className="container row ms-2">
          <div className="col-4 p-3">
            <img src="/images/zerodhafundhouse.png" style={{maxWidth:"50%"}} />
            <p className="text-muted mt-3" style={{fontSize:"14px"}}>Our assest management venture<br/> that is creating simple and transparent index <br/>funds to help yousave for your goals.</p>
          </div>
          <div className="col-4 p-3 mt-3">
             <img src="/images/sensibull-logo.svg" style={{width:"50%"}} />
             <p className="text-muted mt-4" style={{fontSize:"14px"}}>Options trading platform that lets you <br/> create strategies, analyze positions, and examine<br/>data points like open interest, FII/DII, and more.</p>
          </div>
          <div className="col-4 p-3">
              <img src="/images/tijori.svg" style={{maxWidth:"45%"}}/>
              <p className="text-muted mt-2" style={{fontSize:"14px"}}>Investment research platform<br/>that offers detailed insights on stocks,<br/>sectors, supply chains, and more.</p>
          </div>
          <div className="col-4 p-3">
            <img src="/images/streak-logo.png" style={{maxWidth:"50%"}} />
            <p className="text-muted mt-3" style={{fontSize:"14px"}}>Systematic trading platform<br/>that allows you to create and backtest<br/>strategies without coding.</p>
          </div>
          <div className="col-4 p-3 mt-3">
             <img src="/images/smallcase-logo.png" style={{width:"50%"}} />
             <p className="text-muted mt-4" style={{fontSize:"14px"}}>Thematic investing platform<br/>that helps you invest in diversified<br/>baskets of stocks on ETFs.</p>
          </div>
          <div className="col-4 p-3 mt-2">
              <img src="/images/ditto-logo.png" style={{maxWidth:"40%"}}/>
              <p className="text-muted mt-4" style={{fontSize:"14px"}}>Personalized advice on life <br/>and health insurance. No spam<br/>and no mis-selling.</p>
          </div>
          </div>
        </div>
         <div className='container p-2'>
                <button className='p-2 mt-4' style={{width:"17%",backgroundColor:"#387ed1",color:"white",border:"1px solid white",borderRadius:"3px",fontSize:"1.2rem",marginLeft:"32rem"}}>Sign up for free</button>
        </div>
      </div>
    </>
  );
}

export default Universe;
