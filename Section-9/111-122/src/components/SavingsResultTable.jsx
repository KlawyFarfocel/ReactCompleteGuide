import SavingsResult from "./SavingsResult";

export default function SavingsResultTable(props){
    return(
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
            {
                props.yearlyData.map((data,key) =>{
                    return(
                        <SavingsResult key={key} data={data}/>
                    )
                    
                })
            }
        </tbody>
      </table>
    );
}