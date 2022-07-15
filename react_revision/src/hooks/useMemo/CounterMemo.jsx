import { useMemo, useState } from "react";

const CounterMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    return setCounterOne(counterOne + 1);
  };
  const IncrementTwo = () => {
    return setCounterTwo(counterTwo + 1);
  };

  // const isEven = useMemo(() => {
  //   let i = 0;
  //   while (i < 500000000) i++;
  //   return counterOne % 2 === 0;
  // },[counterOne]);
  const isEven = () => {
    let i = 0;
    while (i < 500000000) i++;
    return counterOne % 2 === 0;
  };
  return (
    <>
      <button onClick={IncrementOne}>CounterOne - {counterOne}</button>
      <button onClick={IncrementTwo}>CounterOne - {counterTwo}</button>
      <div> {isEven ? "EVEN" : "ODD"}</div>
    </>
  );
};

export default CounterMemo;
