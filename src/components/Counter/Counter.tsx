import React, {useState} from 'react';
import classes from "../Counter/Counter.module.css";
import CounterDisplay, {TitleType} from "./CounterDisplay/CounterDisplay";
import UniversalButton from "../UniverstalButton/UniversalButton";

type CounterPropsType = {
    number: number
    numberInc: () => void
    numberReset: () => void
    maxNumber: number
    startNumber: number
    tempStartValue: number
    tempMaxValue: number
    btnDisabled: boolean
    error: boolean
}

export function Counter(props: CounterPropsType) {
    return (
        <div className={classes.counter}>
            <div className={classes.displayContainer}>
                <CounterDisplay title={props.number}
                                number={props.number}
                                disabled={props.btnDisabled}
                                maxNumber={props.maxNumber}
                                startNumber={props.startNumber}
                                tempStartNumber={props.tempStartValue}
                                tempMaxNumber={props.tempMaxValue}
                                error={props.error}/>

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


