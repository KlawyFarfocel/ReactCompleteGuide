import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function({title, targetTime}){
    const [remainingTime,setRemainingTime]=useState(targetTime * 1000)
    const timerRef=useRef();
    const dialog=useRef();

    const timerIsActive = remainingTime >0 && remainingTime < targetTime * 1000;

    if(remainingTime <= 0){
        clearInterval(timerRef.current)
        dialog.current.open();
        
    }
    function handleReset(){
        setRemainingTime(targetTime * 1000);
    }

    function handleStart(){
        timerRef.current=setInterval(() => {
            setRemainingTime(prevState => prevState-10)
        },10);
    }
    function handleStop(){
        clearInterval(timerRef.current)
        dialog.current.open();
    }
    return(
        <>
        <ResultModal onReset={handleReset} targetTime={targetTime} result={"lost"} ref={dialog} remainingTime={remainingTime}/>
        <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
                {targetTime} second{targetTime>1 ? "s" : ""}
            </p>
            <p>
                <button ref={timerRef} onClick={timerIsActive ? handleStop : handleStart}>
                    {timerIsActive?"Stop":"Start"} Challenge
                </button>
            </p>
            <p className={timerIsActive? "active":""}>
                {timerIsActive?"Time is running...":"Timer inactive"}
            </p>
        </section>
        </>
    )
}