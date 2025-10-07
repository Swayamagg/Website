import React,{useState} from "react";
import BuyActionWindow from "./BuyActionWindow";

const  GeneralContext=React.createContext({
openBuyWindow:(uid)=>{},
closeBuyWindow:()=>{}
});
export const GeneralContextProvider=(props)=>{
   const[isBuyWindowOpen,setBuyWindow]=useState(false);
   const[selectStockId,setStockId]=useState("");

   const handleOpenBuyWindow=(uid)=>{
    setBuyWindow(true);
    setStockId(uid)
   };
   const handleCloseBuyWindow=()=>{
    setBuyWindow(false);
    setStockId("");
   };
   return(
    <GeneralContext.Provider value={{openBuyWindow:handleOpenBuyWindow,closeBuyWindow:handleCloseBuyWindow}}>
        {props.children}
        {isBuyWindowOpen && <BuyActionWindow uid={selectStockId}/>}
    </GeneralContext.Provider>
   )
}

export default GeneralContext;