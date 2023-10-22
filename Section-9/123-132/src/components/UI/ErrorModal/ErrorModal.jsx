import { useState } from "react";
import Button from "../Button";
import styles from "./ErrorModal.module.css";

export default function ErrorModal(props){
    const hideButtonHandler=()=>{
        props.setErrorModalHide(true)
    }
    return(
            (!props.errorModalHide &&
            <div className={styles.backdrop}>
                <div className={styles.modal}>
                    <div className={styles.header}>
                        <h2>{props.header}</h2>
                    </div>
                    <div className={styles.content}>
                        {props.content}
                    </div>
                    <div className={styles.actions}>
                        {props.actions}
                        <Button type="submit" onClick={hideButtonHandler} children={"Okay"}/>
                    </div>
                </div>
            </div>
            )
    )
}