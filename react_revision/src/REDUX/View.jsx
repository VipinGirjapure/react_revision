import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./CounterAction";

const View = () => {
  const myState = useSelector((state) => state.handleMyCounter);
  //useSelector get all data from store and return as object here state is a object

  const dispatch = useDispatch(); //connects to reducers
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      {myState}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default View;
