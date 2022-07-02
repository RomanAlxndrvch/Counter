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
    setBtnDisabled: (e: boolean) => void
}

export function CounterSetter(props: CounterSetterProps) {
    //Local states
    const [localMaxValue, setLocalMaxValue] = useState<number>(0)
    const [localStartValue, setLocalStartValue] = useState<number>(0)
    const [localBtnDisabled, setLocalBtnDisabled] = useState<boolean>(false)
    const [underZero, setUnderZero] = useState<boolean>(false)
    const zeroConditionStyle = {
        backgroundColor: underZero ? '#D16161' : 'white',
        border: underZero ? 'red 3px solid' : '',
        borderRadius: '5px',
    }

    // useEffects
    useEffect(() => { // Turn off 'Set' button when START value bigger than MAX
        if (localMaxValue <= localStartValue) setLocalBtnDisabled(true)
        else setLocalBtnDisabled(false)
    }, [localStartValue, localMaxValue])

    useEffect(() => { // Turn off 'Set' button when values in state and inputs are same
        localMaxValue === props.MaxValue ? setLocalBtnDisabled(true) : setLocalBtnDisabled(false)
        localStartValue === props.StartValue ? setLocalBtnDisabled(true) : setLocalBtnDisabled(false)
    }, [props.MaxValue, props.StartValue])

    useEffect(() => { // Turn off 'Set' button when values in inputs lover than 0
        if (localMaxValue < 0 || localStartValue < 0) {
            setLocalBtnDisabled(true)
            setUnderZero(true)
        }
        else {
            setUnderZero(false)
        }
    }, [localStartValue, localMaxValue])

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
        props.setBtnDisabled(false)
    }

    return (
        <div className={classes.counterSetter}>
            <div className={classes.inputsContainer}>

                <div className={classes.inputContainer}>
                    <span>Max value:</span> <input
                    style={zeroConditionStyle}
                    onChange={setlMaxValue}
                    value={localMaxValue}
                    className={classes.input}
                    type="number"/>
                </div>

                <div className={classes.inputContainer}>
                    <span>Start value:</span><input
                    style={zeroConditionStyle}
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