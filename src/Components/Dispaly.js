import React,{useState} from "react";
import "./Dispaly.css";
function Display(props){
    

    return (
        <div >
            <input value={props.value} id="screen" />
        </div>
    )
}
export default Display;