import React from "react";
import Buttom from "./Button";
import "./Zero.css";    
function Zero(props)
{
    return (
        <div>
            <Buttom onClick={()=>{props.setInput((input)=>{return input+"0"})}} className="Zero" num="0"/><Buttom onClick={()=>{props.setInput((input)=>{return input+"."})}} className="Zero" num="."/>
        </div>
    )
}
export default Zero;