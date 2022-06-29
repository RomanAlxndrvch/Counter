import React from "react";
import classes from './CounterSetter.module.css'

export function CounterSetter() {
    return (
        <div className={classes.counterSetter}>
            <div className={classes.inputsContainer}>
                <div className={classes.inputContainer}>
                    Max value: <input className={classes.input} type="text"/>
                </div>
                <div className={classes.inputContainer}>
                    Start value: <input className={classes.input} type="text"/>
                </div>
            </div>
            <div className={classes.btnContainer}>
                <button>Set</button>
            </div>
        </div>
    )
}