export default function SavingsResult(props){
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
    return(
      <tr>
        <td>{formatter.format(props.data['year'])}</td>
        <td>{formatter.format(props.data['savingsEndOfYear'])}</td>
        <td>{formatter.format(props.data['yearlyInterest'])}</td>
        <td>{formatter.format(props.data['yearlyInterest']*props.data['year'])}</td>
        <td>{formatter.format(props.data['yearlyContribution']*props.data['year'])}</td>
      </tr>
    )
}