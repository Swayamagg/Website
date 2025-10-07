import axios from 'axios';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import GeneralContext from './GeneralContext';
import './Window.css';


const BuyActionWindow=({uid})=>{
    const [stockQty,setStockQty]=useState(1);
    const [stockPrice,setStockPrice]=useState(0.0);

    const handleBuyClick=()=>{
        axios.post("http://localhost:3002/newOrder",{
            name:uid,
            qty:stockQty,
            price:stockPrice,
            mode:"BUY",
        });
        GeneralContext.closeBuyWindow();
    }
    const handleCancelClick=()=>{
        GeneralContext.closeBuyWindow();
    }
    return(
        <div className='container' id='buy-window' draggable='true'>
            <div className='regular-order'>
                <div className='inputs'>
                    <fieldset>
                        <legend>Qty.</legend>
                        <input type="number" name='qty' id='qty' onChange={(e)=>setStockQty(e.target.value)} value={stockQty}/>
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input type="number" name='price' id='price' step='0.5' onChange={(e)=>setStockPrice(e.target.value)} value={stockPrice} />
                    </fieldset>
                </div>
            </div>
            <div className='buttons'>
                <span>Margin required ₹140.67</span>
                <div>
                    <Link className='btn btn-blue' onClick={handleBuyClick}>Buy</Link>
                    <Link className='btn btn-grey' onClick={handleCancelClick}>Cancel</Link>
                </div>
            </div>
        </div>
    )
}

export default BuyActionWindow;