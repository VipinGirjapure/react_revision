import { useReducer } from "react";

const initialState = {
  fCounter: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { fCounter: state.fCounter + action.value};
    case "decrement":
      return { fCounter: state.fCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const UseReducer2 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>{count.fCounter}</h1>
      <button onClick={() => dispatch({ type: "increment" ,value: 1})}>increment</button>
      <button onClick={() => dispatch({ type: "decrement",value: 1 })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default UseReducer2;
