import React from 'react';
function Pricing(){
    return(
        <>
        <div className='container  me-3 mb-5'>
            <div className='row'>
                <div className='col-5'>
                    <h3 className='fs-3' style={{color:"#424242"}}>Unbeatable pricing</h3>
                    <p className='text-muted'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href='' className='mx-2' style={{textDecoration:"none"}}>See Pricing&nbsp;<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                </div>
                <div className='col-7 mb-5'>
                    <div className='row' >
                        <div className='col-4'>
                            <img src='/images/pricing-eq.svg' alt='price_img' style={{width:"35%",display:"inline-block"}} />
                            <p>Free account <br/>opening</p>
                        </div>
                        <div className='col-4'>
                            <img src='/images/pricing-eq-1.svg' alt='price_img' style={{width:"35%",display:"inline-block"}}/>
                            <p>Free account <br/>opening</p>
                        </div>
                        <div className='col-4'>
                            <img src='/images/other-trades.svg' alt='price_img' style={{width:"35%",display:"inline-block"}}/>
                            <p>Free account <br/>opening</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Pricing;