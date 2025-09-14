import React from 'react';

let styles={
    marginRight:"7rem"
}
function OpenAccount() {
    return(
        <>
        <div className='container p-5 mt-3' style={styles}>
            <div className='row text-center'>
            <h2 className='mt-5' style={{color:"#424242"}}>Open a Zerodha account</h2>
            <p className='mt-3 text-muted' style={{fontSize:"1.25rem",fontWeight:"400"}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <button className='p-2 mt-4' style={{width:"17%",backgroundColor:"#387ed1",color:"white",border:"1px solid white",borderRadius:"3px",fontSize:"1.2rem",margin:"0 auto"}}>Sign up for free</button>
        </div>
        </div>
        </>
    )
}
export default OpenAccount;