import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {
    //States
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [number, setNumber] = useState<number>(0)
    const [btnDisabled, setBtnDisabled] = useState<boolean>(true)
    const [tempStartValue, setTempStartValue] = useState<number>(0)
    const [tempMaxValue, setTempMaxValue] = useState<number>(0)
    const [error, setError] = useState<boolean>(false)


    useEffect(() => {
        setNumber(startValue)
    }, [startValue])

    useEffect(() => {
        setError(false)
        setError(tempStartValue < 0 || tempMaxValue < 0)
        if (tempStartValue > tempMaxValue) setError(true)
        if (tempStartValue === tempMaxValue) setError(true)
    }, [tempStartValue, tempMaxValue])


    // Buttons callbacks
    const numberInc = () => {
        setNumber(number + 1)
        number + 1 >= maxValue && setBtnDisabled(!btnDisabled)
        setError(number + 1 === maxValue)
    }

    const numberReset = () => {
        setNumber(startValue)
        setBtnDisabled(false)
        setError(false)
    }

    return (
        <div className={classes.appContainer}>
            <CounterSetter MaxValue={maxValue}
                           StartValue={startValue}
                           setMaxValue={setMaxValue}
                           setStartValue={setStartValue}
                           setTempMaxValue={setTempMaxValue}
                           setTempStartValue={setTempStartValue}
                           setNumber={setNumber}
                           setBtnDisabled={setBtnDisabled}/>

            <Counter
                number={number}
                numberInc={numberInc}
                numberReset={numberReset}
                maxNumber={maxValue}
                startNumber={startValue}
                tempStartValue={tempStartValue}
                tempMaxValue={tempMaxValue}
                btnDisabled={btnDisabled}
                error={error}
            />
        </div>
    );
}

export default App;
