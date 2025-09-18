import React from 'react';

function Pricing(){
    return(
        <>
        <div className='container'>
            <div className='row text-center' style={{marginTop:"6rem"}}>
            <h1 style={{color:"#424242",fontSize:"1.75rem"}}>Charges</h1>
            <p className='text-muted' style={{fontSize:"1.25rem"}}>List of all charges and taxes</p>
            </div>
            <div className='row p-5 mt-5 text-center'>
            <div className='col-4 p-4 mt-3'>
                <img src='/images/pricing-eq.svg' alt='pricing_img' width={"70%"}/>
                <h1 className='fs-3 mt-3' style={{color:"#424242"}}>Free equity delivery</h1>
                <p className='text-muted mt-2' style={{lineHeight:"1.8",fontSize:"1rem"}}>All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 p-4 mt-3'>
                <img src='/images/other-trades.svg' alt='pricing_img' width={"70%"}/>
                <h1 className='fs-3 mt-3' style={{color:"#424242"}}>Intraday and F&O trades</h1>
                <p className='text-muted mt-2' style={{lineHeight:"1.8",fontSize:"1rem"}}>Flat ₹ 20 or 0.03% (whichever is lower) per<br/> executed order on intraday trades across<br/> equity, currency, and commodity trades.Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 p-4 mt-3'>
                <img src='/images/pricing-eq.svg' alt='pricing_img' width={"70%"}/>
                <h1 className='fs-3 mt-3' style={{color:"#424242"}}>Free direct MF</h1>
                <p className='text-muted mt-2' style={{lineHeight:"1.8",fontSize:"1rem"}}>All direct mutual fund investments are<br/> absolutely free — ₹ 0 commissions & DP<br/> charges.</p>
            </div>
            </div>
       </div>
        </>
    )
}

export default Pricing;