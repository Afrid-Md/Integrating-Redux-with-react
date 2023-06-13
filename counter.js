import classes from './counter.module.css';
import {useSelector, useDispatch} from 'react-redux';

const Counter = () => {

  const dispatch=useDispatch();

  const counter=useSelector(state=>state.counter);
  const toggleIncrementHandler = () => {
    dispatch({type:'increment'})
  };

  const toggleDecrementHandler = () => {
    dispatch({type:'decrement'})
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleIncrementHandler}>Increment Counter</button>
      <button onClick={toggleDecrementHandler}>Decrement counter</button>
    </main>
  );
};

export default Counter;