import React from "react";
import classes from "./Display.module.css";

type DisplayPropsType = {
    state: number
}


function Display(props: DisplayPropsType) {
    const textColor = props.state === 5 ? classes.max : classes.normal

    return (
        <div className={`${classes.display} ${textColor}`}>
            <h1>{props.state}</h1>
        </div>
    )
}

export default Display