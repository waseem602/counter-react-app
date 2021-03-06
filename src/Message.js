import React from 'react';
import "./App.css";

export function Message(props){
    return(
    <h3>Value in the counter is: <b>{props.counter}</b></h3>
    );
}