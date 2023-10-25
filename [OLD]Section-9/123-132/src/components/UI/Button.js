import styles from "./Button.module.css";
export default function Button(props){
    return(
        <button type={props.type} onClick={props.onClick} className={styles.button}>
            {props.children}
        </button>
    )
}