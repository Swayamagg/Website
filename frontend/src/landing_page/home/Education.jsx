import React from 'react';
function Education(){
    return(
        <>
        <div className='container mt-3'>
            <div className='row'> 
                <div className='col-6'>
                    <img src='/images/index-education.svg' alt='education_img' width={"55%"}/>
                </div>
                <div className='col-6'>
                    <h2 className='mb-4 fs-3' style={{color:"#424242"}}>Free and open market education</h2>
                    <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='' className='' style={{textDecoration:"none"}}>Varsity<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='' className='' style={{textDecoration:"none"}}>TradingQ&A<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
               </div>
            </div>
        </div>
        </>
    )

}
export default Education;