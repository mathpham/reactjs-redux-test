import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux";
import {increment,decrement} from "./actions/counter";
import Test from './Test';




function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  


  return (
    <div>
      <Test/>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increment</button>
      <button onClick={() => dispatch(decrement(5))}>Decrement</button>
    </div>
  );
}

export default App;
