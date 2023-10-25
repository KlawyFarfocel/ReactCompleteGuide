import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
// --- REACT
// import './CourseInput.css';
// --- End of REACT

// --- Styled components
// import styled from 'styled-components';

// const FormControl=styled.div
// `
//   margin: 0.5rem 0;

// & label {
//   font-weight: bold;
//   display: block;
//   margin-bottom: 0.5rem;
// }

// & input {
//   display: block;
//   width: 100%;
//   border: 1px solid ${props => props.invalid?"salmon":"#ccc"};
//   font: inherit;
//   line-height: 1.5rem;
//   padding: 0 0.25rem;
//   background: ${props => props.invalid?"rgb(233, 121, 121);":""}; 
// }

// & input:focus {
//   outline: none;
//   background: #fad0ec;
//   border-color: #8b005d;
// }
// &.invalid label{
//   color: red;
// }
// &.invalid input{

// }
// `
// --- END of Styled components

import styles from "./CourseInput.module.css";

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid,setIsValid]=useState(true);
  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length===0){
      setIsValid(false);
      return;
    }
    setIsValid(true)

    props.onAddGoal(enteredValue);
  };

  return (
    // -------------------STYLED COMPONENTS
    // <form onSubmit={formSubmitHandler}>
    //   <FormControl invalid={isValid ? 'true' : undefined}>
    //     <label>Course Goal</label>
    //     <input type="text" onChange={goalInputChangeHandler} />
    //   </FormControl>

    //   <Button type="submit">Add Goal</Button>
    // </form>

    // -------------------CSS MODULES
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${isValid?"":styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
