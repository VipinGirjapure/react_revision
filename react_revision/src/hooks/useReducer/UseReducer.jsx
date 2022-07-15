import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>UseReducer</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}> + </button>
      <button onClick={() => dispatch("decrement")}> - </button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </>
  );
};

export default UseReducer;
