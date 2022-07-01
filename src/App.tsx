import React, {useEffect, useState} from 'react';
import classes from './App.module.css'
import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {
    //States
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [number, setNumber] = useState<number>(0)
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false)

    const [tempStartValue, setTempStartValue] = useState<number>(Math.pow(21, 12))
    const [tempMaxValue, setTempMaxValue] = useState<number>(Math.pow(21, 12))

    useEffect(() => {
        setNumber(startValue)
    }, [startValue])
    useEffect(() => {
        setBtnDisabled(false)
    }, [startValue, maxValue])

    // Buttons callbacks
    const numberInc = () => {
        setNumber(number + 1)
        number + 1 >= maxValue && setBtnDisabled(!btnDisabled)
    }
    const numberReset = () => {
        setNumber(startValue)
        setBtnDisabled(!btnDisabled)
    }

    return (
        <div className={classes.appContainer}>
            <CounterSetter MaxValue={maxValue}
                           StartValue={startValue}
                           tempStartValue={tempStartValue}
                           tempMaxValue={tempMaxValue}
                           setMaxValue={setMaxValue}
                           setStartValue={setStartValue}
                           setTempStartValue={setTempStartValue}
                           setTempMaxValue={setTempMaxValue}/>
            <Counter
                number={number}
                numberInc={numberInc}
                numberReset={numberReset}
                maxNumber={maxValue}
                startNumber={startValue}
                btnDisabled={btnDisabled}
            />
        </div>
    );
}

export default App;
