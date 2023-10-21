export default function SavingsResult(props){
    return(
      <tr>
        <td>{props.data['year']}</td>
        <td>{props.data['savingsEndOfYear']}</td>
        <td>{props.data['yearlyInterest']}</td>
        <td>{props.data['yearlyInterest']*props.data['year']}</td>
        <td>{props.data['yearlyContribution']*props.data['year']}</td>
      </tr>
    )
}