import React from 'react'
import "./Result.css";
import { Button } from '@material-ui/core';

const Result = ({temp,icon,desc,setTemp}) => {
    return (
        <div className="result">
            <div className="result__box">
                <h1>Temp :{temp}°C</h1>
                <p>{desc}</p>
                <img src={icon} alt="logo"/><br />
                <Button variant="contained" color="primary" onClick={()=>{setTemp("")}}>
                    Back
                </Button>

            </div>
            
        </div>
    )
}

export default Result
