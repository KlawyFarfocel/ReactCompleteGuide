import { forwardRef, useImperativeHandle, useRef } from "react"
import {createPortal} from "react-dom";

const ResultModal=forwardRef(function ResultModal({onReset,targetTime,remainingTime},ref){

    const dialog=useRef();

    const userLost = remainingTime <=0;
    const formattedRemainingTime=(remainingTime/1000).toFixed(2);
    const score = Math.floor((1 - ((remainingTime/1000)/targetTime))*100);

    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="result-modal" onClose={onReset}>
            <h2>{userLost?"You lost":"Your score is: "+score}</h2>
            <p>The targe time was <strong>{targetTime} seconds.</strong></p>
            <p>You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong></p>
            <form method="dialog">
                <button type="submit" onClick={onReset}>Close</button>
            </form>
        </dialog>
        ,
        document.getElementById("modal")
    )
})
export default ResultModal