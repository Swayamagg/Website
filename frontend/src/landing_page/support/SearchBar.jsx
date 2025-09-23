import React from 'react';

function SearchBar() {
    return(
    <section className='container-fluid' id='support'>
        <div className='p-5 ' id='supportWrapper'>
            <p className='fs-2 fw-bold ' style={{color:"#424242"}}>Support portal</p>
            <a href="" className='border border-2 p-3 h-25 py-2 ' style={{textDecoration:"none",backgroundColor:"#397dd0",color:"white",width:"9%",borderRadius:"7px",}} >My Tickets</a>
        </div>
        <div className='row  p-3' style={{marginTop:"-45px",marginLeft:"5.5rem",width:"88%"}}>
             <input type="text" placeholder='Eg: How do I open my account, How do I activate F&O...' className='search form-control p-3'/>
        </div>
    </section>
    
    )
    
}
export default SearchBar;