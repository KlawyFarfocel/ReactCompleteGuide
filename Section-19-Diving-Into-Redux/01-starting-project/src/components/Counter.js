import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };
  const incrementHandler=()=>{
    dispatch(counterActions.increment())
  }
  const increaseHandler=(value)=>{
    dispatch(counterActions.increase(value))
  }
  const decrementHandler=()=>{
    dispatch(counterActions.decrement())
  }
  const counter=useSelector(state=>state.counter.counter);
  const counterState=useSelector(state=>state.counter.showCounter)
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
