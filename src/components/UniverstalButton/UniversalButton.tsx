import React from "react";
import classes from "./UniversalButton.module.css";

type UniversalButtonType = {
    title: string
    callback: () => void
    number?: number
    maxNumber?: number
    btnDisabled?: boolean
}

function UniversalButton(props: UniversalButtonType) {
    return (
        <button onClick={props.callback}
                disabled={props.btnDisabled}
                className={classes.btn}>{props.title}</button>
    )
}

export default UniversalButton