import React from 'react';
function Awards() {
    return(
        <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src="./images/largestBroker.svg" alt="Awards" style={{width:"86%"}} />
                </div>
                <div className='col-6 p-5'>
                   <h2>Largest stock broker in India</h2>
                   <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                   <div className='row p-3'>
                    <div className='col-6 '>
                        <ul>
                            <li>Future and operations</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ul>
                    </div>
                    <div className='col-6 '>
                        <ul>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. </li>
                        </ul>
                    </div>
                   </div>
                   <img src='./images/pressLogos.png' alt='logo_img' style={{width:"87%"}}/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Awards;