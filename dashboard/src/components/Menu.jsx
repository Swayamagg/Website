import React, { useState } from "react";
import {Link} from "react-router-dom";
import "../App.css"
const Menu = () => {
  const [selectMenu,setSelectMenu]=useState(0);
  const [isProfile,setProfile]=useState(false);

  const handleMenu=()=>{
    setSelectMenu(selectMenu);
  }
  const handleProfile=()=>{
    setProfile(!isProfile);
  }
  const menuClass="menu";
  const activeMenu="menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link onClick={()=>handleMenu(0)} to="/" style={{textDecoration:"none"}}><p className={selectMenu===0 ? activeMenu:menuClass}>Dashboard</p></Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(1)} to="/orders" style={{textDecoration:"none"}}><p className={selectMenu===0 ? activeMenu:menuClass}>Orders</p></Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(2)} to="/holdings" style={{textDecoration:"none"}}><p className={selectMenu===0 ? activeMenu:menuClass}>Holdings</p></Link>
          </li>
          <li>
           <Link onClick={()=>handleMenu(3)} to="/positions" style={{textDecoration:"none"}}><p className={selectMenu===0 ? activeMenu:menuClass}>Positions</p></Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(4)} to="/funds" style={{textDecoration:"none"}}><p className={selectMenu===0 ? activeMenu:menuClass}>Funds</p></Link>
          </li>
          <li>
            <Link onClick={()=>handleMenu(5)} to="/apps" style={{textDecoration:"none"}}><p className={selectMenu===0 ? activeMenu:menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;