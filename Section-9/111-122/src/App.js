import { useState } from 'react';
import logo from './assets/investment-calculator-logo.png';
import SavingsForm from './components/SavingsForm';
import SavingsResultTable from './components/SavingsResultTable';

function App() {
  const yearlyData = []; // per-year results
  const [updatedYearlyData,setUpdatedYearlyData]=useState([]);
  const [userInput,setUserInput]=useState()
  const calculateHandler = (e,userInput) => {
    // Should be triggered when form is submitted
    e.preventDefault();
    // You might not directly want to bind it to the submit event on the form though...
    setUserInput(userInput);
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setUpdatedYearlyData(prevState =>yearlyData);
   
   // do something with yearlyDsata ...
  };
  const resetHandler=()=>{
  }
  return (
    
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <SavingsForm onCalculateClick={calculateHandler} onResetClick={resetHandler}/>
      {(!userInput?
        <p style={{textAlign:"center"}}>No investment yet!</p>
        :
        <SavingsResultTable yearlyData={updatedYearlyData}/>
      )}
      
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}


    </div>
  );
}

export default App;
