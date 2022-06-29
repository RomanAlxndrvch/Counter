import React, {useState} from 'react';
import classes from './App.module.css'
import Display from "./components/Display/Display";
import UniversalButton from "./components/UniverstalButton/UniversalButton";

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
            <div className={classes.app}>
                <div className={classes.displayContainer}>
                    <Display state={number}/>
                </div>
                <div className={classes.btnContainer}>
                    <UniversalButton title={'INC'} callback={numberInc} state={number}/>
                    <UniversalButton title={'RESET'} callback={numberReset}/>
                </div>
            </div>
        </div>
    );
}

export default App;
