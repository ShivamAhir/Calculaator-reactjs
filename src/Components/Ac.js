import React from "react";
import Buttom from "./Button";
import "./Ac.css";

function Ac(props)
{
    return (
        <div >
            <Buttom onClick={()=>{props.setInput("")}} className="AC" num="AC" />
            <Buttom onClick={()=>{props.setInput((input)=>{
                console.log(typeof( input));
                let text = input;
                let len = text.length;
                let ans=text.slice(0,len-1);
                return ans;
            })}} className="AC" num="C"/>
        </div>
    )
}
export default Ac;