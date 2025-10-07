import React, { useContext, useState } from 'react';
import {BarChartOutlined, KeyboardArrowDown,KeyboardArrowUp, MoreHoriz} from "@mui/icons-material";
import { Grow, Tooltip } from '@mui/material';
import GeneralContext from './GeneralContext';


const WatchListItem=({stock})=>{
    const[watchActions,setWatchActions]=useState(false);

    const handleMouseEnter=(e)=>{
        setWatchActions(true);
    }
    const handleMouseLeave=(e)=>{
        setWatchActions(false);
    }
    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='item'>
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className='itemInfo'>
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (<KeyboardArrowDown className='down'/>):(<KeyboardArrowUp className='up'/>)}
                    <span>{stock.price}</span>
                </div>
            </div>
            {watchActions && <WatchListActions uid={stock.name}/>}
        </li>
    )
}
export default WatchListItem;

const WatchListActions=({uid})=>{
    const generalContext=useContext(GeneralContext);
    const handleBuyClick=()=>{
        generalContext.openBuyWindow(uid);
    }
      return(
        <span className='actions'>
            <span>
                <Tooltip title="Buy (B)" placement='top' arrow TransitionComponent={Grow}></Tooltip>
                <button className='buy' onClick={handleBuyClick}>Buy</button>
                <Tooltip title="Sell (S)" placement='top' arrow TransitionComponent={Grow}></Tooltip>
                <button className='sell'>Sell</button>
                <Tooltip title="Analytics (A)" placement='top' arrow TransitionComponent={Grow}></Tooltip>
                <button className='action'><BarChartOutlined className='icon'/></button>
                <Tooltip title="More" placement='top' arrow TransitionComponent={Grow}></Tooltip>
                <button className='action'><MoreHoriz className='icon'/></button>
            </span>
        </span>

      )
}