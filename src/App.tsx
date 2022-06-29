import React, {useState} from 'react';
import classes from './App.module.css'

import {Counter} from "./components/Counter/Counter";
import {CounterSetter} from "./components/CounterSetter/CounterSetter";

function App() {

    //State
    const [number, setNumber] = useState<number>(0)

    // Buttons callbacks
    const numberInc = () => {
        setNumber(number + 1)
    }
    const numberReset = () => {
        setNumber(0)
    }

    return (
        <div className={classes.appContainer}>
            <CounterSetter/>
            <Counter number={number} numberInc={numberInc} numberReset={numberReset}/>
        </div>
    );
}

export default App;
