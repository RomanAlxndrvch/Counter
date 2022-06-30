import React, {useEffect, useState} from "react";
import classes from "./CounterDisplay.module.css";

type TitleType = number | "enter values and press 'Set'"
type DisplayPropsType = {
    title: TitleType
    maxNumber: number
    startNumber: number
    disabled: boolean
    number: number
}

function CounterDisplay(props: DisplayPropsType) {
    const textColor = props.disabled ? classes.max : classes.normal

    const [title, setTitle] = useState<TitleType>(props.startNumber)

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