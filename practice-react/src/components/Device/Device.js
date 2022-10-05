import React, { useState } from 'react';
import Steps from '../Steps/Steps';

const Device = (props) => {
    const [run, setRun] = useState(0);
    const runKm = () => {
        const dailyRun = run + 1;
        setRun(dailyRun);
    }
    return (
        <div>
            <h1>Your Device Name: {props.name} </h1>
            <h2>Daily {run}km running is better for Health</h2>
            <button onClick={runKm}>Run</button>
            <Steps run={run}></Steps>
        </div>
    );
};

export default Device;