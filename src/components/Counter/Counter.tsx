import React, {useState} from 'react';
import classes from "../Counter/Counter.module.css";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import UniversalButton from "../UniverstalButton/UniversalButton";

type CounterPropsType = {
    number: number
    numberInc: () => void
    numberReset: () => void
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={classes.counter}>
            <div className={classes.displayContainer}>
                <CounterDisplay state={props.number}/>
            </div>
            <div className={classes.btnContainer}>
                <UniversalButton title={'INC'} callback={props.numberInc} state={props.number}/>
                <UniversalButton title={'RESET'} callback={props.numberReset}/>
            </div>
        </div>
    )
}


