import React, {useState} from 'react';
import classes from "../Counter/Counter.module.css";
import CounterDisplay from "./CounterDisplay/CounterDisplay";
import UniversalButton from "../UniverstalButton/UniversalButton";

type CounterPropsType = {
    number: number
    numberInc: () => void
    numberReset: () => void
    maxNumber: number
    startNumber: number
    btnDisabled: boolean
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={classes.counter}>
            <div className={classes.displayContainer}>
                <CounterDisplay title={props.number}
                                maxNumber={props.maxNumber}
                                disabled={props.btnDisabled}
                                number={props.number}
                                startNumber={props.startNumber}/>
            </div>
            <div className={classes.btnContainer}>
                <UniversalButton title={'INC'}
                                 callback={props.numberInc}
                                 number={props.number}
                                 maxNumber={props.maxNumber}
                                 btnDisabled={props.btnDisabled}/>
                <UniversalButton title={'RESET'}
                                 callback={props.numberReset}/>
            </div>
        </div>
    )
}


