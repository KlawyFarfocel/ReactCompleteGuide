import "./styles/ExpenseDate.css";
function ExpenseDate(props){
    var month=props.date.toLocaleString('en-US',{month:'long'});
    var day=props.date.toLocaleString('en-US',{day:'numeric'});
    var year=props.date.toLocaleString('en-US',{year:'numeric'});
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}
export default ExpenseDate;