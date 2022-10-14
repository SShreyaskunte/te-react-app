import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import '../Styles/Functional.css';

function FunctinalComponent()
{
   return(
    <h1> <FunctinalComponent4></FunctinalComponent4> I am the first functional Component and <FunctinalComponent1></FunctinalComponent1></h1>
   )
}

function FunctinalComponent1()
{
   return(
    <h5>I am the second functional Component <FunctinalComponent2></FunctinalComponent2></h5>
   )
}

const FunctinalComponent2 = () =>{
    return(
        <h6>I am the third functional Component <FunctinalComponent3></FunctinalComponent3></h6>
    )
}

const FunctinalComponent3=() =>{
    return(
        <div>
        <h6>I am the fourth functional Component in div</h6>
        <h6>I am the fourth functional Component in div</h6>
        </div>
    )
}

//React fragments

const FunctinalComponent4=() =>{
    return(
        <table style={{width : '100%'}}>
            <thead>
                <tr>
                    <FunctinalComponent5></FunctinalComponent5>
                </tr>
            </thead>
        </table>
    )
}

const FunctinalComponent5=() =>{
    return(
        <React.Fragment>
        <td>SNO</td>
        <td>SNAME</td>
        <td>Sage</td>
        <td>Designation</td>
        </React.Fragment>
    )
}

export default  FunctinalComponent;
