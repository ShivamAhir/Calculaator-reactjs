import React from "react";
import Operator from "./Operator";
import ButtonRow from "./ButtonRow";
import Zero from "./Zero";
import Ac from "./Ac";
import "./Keyboard.css";
function Keyboard(props){
    
    return (
        <div className="block_container">
            <div className="bloc1">      
                <Ac setInput={props.setInput}/>
                <ButtonRow setInput={props.setInput} num="1"/>
                <ButtonRow setInput={props.setInput} num="4"/>
                <ButtonRow setInput={props.setInput} num="7"/>
                <Zero setInput={props.setInput}/>
            </div>
            <div className="bloc2">
                <Operator setInput={props.setInput}/>
            </div>
        </div>
    )
}
export default Keyboard;