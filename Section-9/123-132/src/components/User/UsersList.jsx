import styles from "./UsersList.module.css";

export default function UsersList(props){
    return(
        <div className={styles.users}>
            <ul className={styles.ul}>
                {
                    props.usersList.map((user,key)=>{
                        return(
                            <li className={styles.users} key={key}>
                                {
                                    user['Username']+" ("+user["Age"]+" years old)"
                                }
                            </li>
                        )  
                    })
                }
            </ul>
        </div>

    )
}