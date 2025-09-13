import React from 'react';

function Hero(params) {
    return(
        <>
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='/images/homeHero.png' alt='home' className='mb-4' style={{width:"70%",marginLeft:"12rem"}}/>
            
            <h2 className='mt-5'>Invest in everything</h2>
            <p className='mt-3' style={{fontSize:"1.25rem",fontWeight:"400"}}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className='p-2 mt-4' style={{width:"17%",backgroundColor:"#387ed1",color:"white",border:"1px solid white",borderRadius:"3px",fontSize:"1.2rem",margin:"0 auto"}}>Sign up for free</button>
        </div>
        </div>
        </>
    )
}
export default Hero;