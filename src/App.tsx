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

    const [tempStartValue, setTempStartValue] = useState<number>(0)
    const [tempMaxValue, setTempMaxValue] = useState<number>(0)

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
                           setMaxValue={setMaxValue}
                           setStartValue={setStartValue}
                           setTempMaxValue={setTempMaxValue}
                           setTempStartValue={setTempStartValue}
                           setNumber={setNumber}/>

            <Counter
                number={number}
                numberInc={numberInc}
                numberReset={numberReset}
                maxNumber={maxValue}
                startNumber={startValue}
                tempStartValue={tempStartValue}
                tempMaxValue={tempMaxValue}
                btnDisabled={btnDisabled}
            />
        </div>
    );
}

export default App;
