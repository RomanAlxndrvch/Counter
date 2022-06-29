import React from "react";
import classes from "./CounterDisplay.module.css";

type DisplayPropsType = {
    state: number
}

function CounterDisplay(props: DisplayPropsType) {
    const textColor = props.state === 5 ? classes.max : classes.normal

    return (
        <div className={`${classes.counterDisplay} ${textColor}`}>
            <h1>{props.state}</h1>
        </div>
    )
}

export default CounterDisplay