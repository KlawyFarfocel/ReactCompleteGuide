import ExpenseDate from "./ExpenseDate";
import "./styles/ExpenseItem.css";
function ExpenseItem(props) {
    let title=props.title;

    const btnPressHandler=()=>{
        title="Dupa";
        alert(title)
    }
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2 className="fs-1">{title}</h2>
            </div>
            <button onClick={btnPressHandler}>Change title</button>
        </div>
    );
}
export default ExpenseItem;