import React from "react";
import classes from "./UniversalButton.module.css";

type UniversalButtonType = {
    title: string
    callback: () => void
    state?: number
}

function UniversalButton(props: UniversalButtonType) {
    return (
        <button onClick={props.callback} disabled={props.state === 5} className={classes.btn}>{props.title}</button>
    )
}

export default UniversalButton