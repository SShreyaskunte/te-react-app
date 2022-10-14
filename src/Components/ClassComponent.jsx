import React from "react";
import FuncComp  from './Functional'

//class component

class ClassComponent extends React.Component{
    render(){
        return(
            <h3> <FuncComp></FuncComp> I am a Class Component and <ClassComponent1></ClassComponent1></h3>
        )
    }
}

class ClassComponent1 extends React.Component{
    render(){
        return(
            <h3>I am the Second Class Component and <FunctinalComponent></FunctinalComponent> </h3>
        )
    }
}

function FunctinalComponent(){
    return(
        <h5>I am a functional component in class component</h5>
    )
}

export default ClassComponent;