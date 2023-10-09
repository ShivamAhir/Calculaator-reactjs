import React from "react";

import Buttom from "./Button";
import "./ButtonRow.css";
function ButtonRow(props){
    const getButtonRow=(num)=>{
        const res=[];
        for(let i=0;i<3;i++)
        {
            res.push(<Buttom onClick={()=>{props.setInput((input)=>{return input+String((num+i))})}} className="num" num={num+i}/>);
        }
        return res;
    }
    return (
        <div>
        {
            getButtonRow(Number(props.num))
        }
        </div>
    )
}

export default ButtonRow;