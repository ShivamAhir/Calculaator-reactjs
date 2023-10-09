import React,{useState} from "react";
import Buttom from "./Button";
import "./Operator.css";
function Operator(props){
    const handleOperator=(op)=>{
        setOperator(op);
        props.setInput((input)=>{setOne(input); return ""});
    }
    const Myouput=()=>{
        props.setInput((input)=>{
            let x=Number(input);
            let y=Number(one);
            let ans="";
            if(operator=="")
            ans=input;
            else if(operator=="/")
            ans=x/y;
            else if(operator=="*")
            ans=x*y;
            else if(operator=="-")
            ans=y-x;
            else
            ans=x+y;
            setOne("");
            setOperator("");

            return ans;
        })
        
    }
    const [one,setOne]=useState("");
    const [operator,setOperator]=useState("");
    return (
        <div>
            <Buttom onClick={()=>{handleOperator('/')}} className="op" num="/"/><br/>
            <Buttom onClick={()=>{handleOperator('*')}} className="op" num="*"/><br/>
            <Buttom onClick={()=>{handleOperator('-')}} className="op" num="-"/><br/>
            <Buttom onClick={()=>{handleOperator('+')}} className="op" num="+"/><br/>
            <Buttom onClick={Myouput} className="op" num="="/>
        </div>
    )
}
export default Operator;