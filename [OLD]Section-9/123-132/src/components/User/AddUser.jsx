import { useState } from "react";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

export default function AddUser(props){
    const [errorMessage, setErrorMessage]=useState("")
    const [errorModalHide,setErrorModalHide]=useState(false);

    const [username,setUsername]=useState("");
    const [age,setAge]=useState();
    const [ageError,setAgeError]=useState(false);
    const [invalidInputError,setInvalidInputError]=useState(false);
    const buttonClickHandler=(e)=>{
        e.preventDefault();
        let errorFlag=false;
        if(parseInt(age)<=0){
            setAgeError(true);
            setErrorMessage("Please enter valid age (> 0).")
            errorFlag=true;
        }
        if(age===undefined || username.trim().length==0){
            setInvalidInputError(true);
            setErrorMessage("Please enter a valid name and age (non-empty values).")
            errorFlag=true;
        }
        const userInput={
            "Username":username,
            "Age":age
        }
        if(errorFlag){
            setErrorModalHide(false)
            return;
        }
        props.onUserAdd(userInput);
        setAgeError(false);
        setInvalidInputError(false);
    }
    return(
        <>
        {
            (ageError || invalidInputError) && (
                <ErrorModal
                errorModalHide={errorModalHide}
                setErrorModalHide={setErrorModalHide} 
                header={"Invalid input"} 
                actions={null}
                content={errorMessage}
              />
            )
        }
        <form className={styles.input}>
            <div className={styles.input}>
                <label htmlFor="username" className={styles.label}>Username</label>
                <input onBlur={(e)=>setUsername(e.target.value)}  type="text" id="username" className={styles.input} />
            </div>
            <div className={styles.input}>
                <label htmlFor="username" className={styles.label}>Age (Years)</label>
                <input onBlur={(e)=>setAge(parseInt(e.target.value))} type="number" id="age" className={styles.input} />
            </div>
            <div className={styles.input}>
                <Button type="submit" onClick={(e)=>buttonClickHandler(e)} children={"Add User"} />
            </div>
        </form>
        </>
    );
}