import React, {useEffect, useState} from "react";
import classes from "./CounterDisplay.module.css";

export type TitleType = number | string
type DisplayPropsType = {
    title: TitleType
    maxNumber: number
    startNumber: number
    disabled: boolean
    number: number
    tempStartNumber: number
    tempMaxNumber: number
}

function CounterDisplay(props: DisplayPropsType) {
    //States
    const [title, setTitle] = useState<TitleType>("")

    // Display font color changer
    let textColor = classes.normal
    if (props.maxNumber === props.number) {
        textColor = classes.max
    }
    if (props.startNumber !== props.tempStartNumber || props.maxNumber !== props.tempMaxNumber) {
        textColor = classes.normal
    }

    // Use effects
    useEffect(() => {
        setTitle("Enter values and press 'Set'")
    }, [props.startNumber !== props.tempStartNumber ||
    props.maxNumber !== props.tempMaxNumber])

    useEffect(() => {
        setTitle(props.number)
    }, [props.maxNumber])

    useEffect(() => {
        setTitle(props.number)
    }, [props.number])


    return (
        <div className={`${classes.counterDisplay} ${textColor}`}>
            <h1>{title}</h1>
        </div>
    )
}

export default CounterDisplay