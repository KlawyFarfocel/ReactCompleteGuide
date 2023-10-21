import { useState } from "react"

export default function SavingsForm(props){
    const [currentSavings,setCurrentSavings]=useState(0);
    const [yearlySavings,setYearlySavings]=useState(0);
    const [expectedInterest,setExpectedInterest]=useState(0);
    const [investmentDuration, setInvestmentDuration]=useState(0);
    const userInput={
        'current-savings':currentSavings,
        'yearly-contribution':yearlySavings,
        'expected-return':expectedInterest,
        "duration":investmentDuration
    }
    return(
<form className="form" onSubmit={(e)=>props.onCalculateClick(e,userInput)}>
    <div className="input-group">
    <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input onBlur={e=>setCurrentSavings(e.target.value)} type="number" id="current-savings" />
    </p>
    <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input onBlur={e=>setYearlySavings(e.target.value)} type="number" id="yearly-contribution" />
    </p>
    </div>
    <div className="input-group">
    <p>
        <label htmlFor="expected-return">
        Expected Interest (%, per year)
        </label>
        <input onBlur={e=>setExpectedInterest(e.target.value)} type="number" id="expected-return" />
    </p>
    <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input onBlur={e=>setInvestmentDuration(e.target.value)} type="number" id="duration" />
    </p>
    </div>
    <p className="actions">
    <button onClick={props.onResetClick} type="reset" className="buttonAlt">
        Reset
    </button>
    <button type="submit" className="button">
        Calculate
    </button>
    </p>
</form>
    )
}