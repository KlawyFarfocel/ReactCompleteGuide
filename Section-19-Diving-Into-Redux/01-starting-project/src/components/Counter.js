import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:"TOGGLE_COUNTER"})
  };
  const incrementHandler=()=>{
    dispatch({type:"INCREMENT"})
  }
  const increaseHandler=(value)=>{
    dispatch({type:"INCREASE",amount:value})
  }
  const decrementHandler=()=>{
    dispatch({type:"DECREMENT"})
  }
  const counter=useSelector(state=>state.counter);
  const counterState=useSelector(state=>state.showCounter)
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {counterState  && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
         <button onClick={()=>increaseHandler(5)}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
