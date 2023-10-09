import React from "react";

function Buttom(props){
return (
        <button onClick={props.onClick}  className={props.className} >{props.num}</button>
)
}
export default Buttom;