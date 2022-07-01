import React, {ChangeEvent, useEffect, useState} from "react";
import classes from './CounterSetter.module.css'
import UniversalButton from "../UniverstalButton/UniversalButton";
import {log} from "util";

type CounterSetterProps = {
    StartValue: number
    MaxValue: number
    setMaxValue: (e: number) => void
    setStartValue: (e: number) => void
    setTempStartValue: (e: number) => void
    setTempMaxValue: (e: number) => void
    setNumber: (e: number) => void
}

export function CounterSetter(props: CounterSetterProps) {
    //Local states
    const [localMaxValue, setLocalMaxValue] = useState<number>(0)
    const [localStartValue, setLocalStartValue] = useState<number>(0)
    const [localBtnDisabled, setLocalBtnDisabled] = useState<boolean>(false)

    useEffect(() => {
        setLocalBtnDisabled(!localBtnDisabled)
    }, [localStartValue === props.StartValue && localMaxValue === props.MaxValue])

    //Input useState changers(LOCAL)
    const setlMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalMaxValue(Number(e.currentTarget.value))
        props.setTempMaxValue(Number(e.currentTarget.value))
    }
    const setlStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStartValue(Number(e.currentTarget.value))
        props.setTempStartValue(Number(e.currentTarget.value))
    }

    // Button CallBack
    const btnHandler = () => {
        props.setMaxValue(localMaxValue)
        props.setStartValue(localStartValue)
        props.setNumber(localStartValue)
    }

    console.log()

    return (
        <div className={classes.counterSetter}>
            <div className={classes.inputsContainer}>

                <div className={classes.inputContainer}>
                    Max value: <input
                    onChange={setlMaxValue}
                    value={localMaxValue}
                    className={classes.input}
                    type="number"/>
                </div>

                <div className={classes.inputContainer}>
                    Start value: <input
                    onChange={setlStartValue}
                    value={localStartValue}
                    className={classes.input}
                    type="number"/>
                </div>

            </div>
            <div className={classes.btnContainer}>
                <UniversalButton title={'Set'} callback={btnHandler} btnDisabled={localBtnDisabled}/>
            </div>
        </div>
    )
}