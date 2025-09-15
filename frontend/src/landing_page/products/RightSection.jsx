import React from 'react';
 

function RightSection({imgUrl,productName,productDesc,learnMore,googlePlay,appStore}) {
    return(
        <>
        <div className='container p-4 mb-5 'style={{display:"flex",alignItems:"center"}}>
            <div className='row p-5'>
                <div className='col-5 p-5 '>
                    <h3>{productName}</h3>
                    <p style={{fontSize:"1rem",marginBottom:"15px",lineHeight:"1.8"}} >{productDesc}</p>
                    <div>
                        <a href={learnMore} style={{textDecoration:"none"}}>Learn more&nbsp;<i className='fa fa-long-arrow-right' aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                    <a href={googlePlay}><img src='public/images/google-play-badge.svg'/></a>
                    <a href={appStore} style={{marginLeft:"1rem"}}><img src='public/images/appstore-badge.svg'/></a>
                    </div>
              </div>
                <div className='col-1'></div>
                <div className='col-6 '>
                    <img src={imgUrl} alt='product_img' style={{maxWidth:"90%"}}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default RightSection;