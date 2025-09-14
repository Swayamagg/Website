import React from "react";

let styles={
    marginRight:"7rem"
}
function NotFound() {
    return(
        <>
        <div className='container p-5 mt-3' style={styles}>
            <div className='row text-center'>
            <h2 className='mt-5'>404 NOT FOUND</h2>
            <p className='mt-3 text-muted' style={{fontSize:"1.25rem",fontWeight:"400"}}>Sorry,the page you are looking not exist.</p>
        </div>
        </div>
        </>
    )
}
export default NotFound;