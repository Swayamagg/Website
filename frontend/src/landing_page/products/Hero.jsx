import React from 'react';
function Hero() {
    return(
        <>
        <div className='container border-bottom mb-5'>
            <div className='row text-center mt-5 p-5'>
                <h1 className='fs-3'>Zerodha Products</h1>
                <p className='fs-4 mt-2 text-muted'>Sleek, modern, and intuitive trading platforms</p>
                <p className='mt-3'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings{" "}<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a></p>
            </div>
        </div>
        </>
    )
}

export default Hero;