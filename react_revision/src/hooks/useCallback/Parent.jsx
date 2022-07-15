import React, { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Footer from "./Footer";
import Title from "./Title";

const Parent = () => {
  const [countAge, setCountAge] = useState(25);
  const [countSalary, setCountSalary] = useState(50000);

  const increment = useCallback(() => {
    setCountAge(countAge + 1);
  },[countAge])
  const decrement = (() => {
    setCountSalary(countSalary + 1000);
  },[countSalary]);

  return (
    <>
      <Title />
      <Count text="AGE" count={countAge} />
  
      <Button handleClick={increment}>Increment</Button>
      <Count text="SALARY" count={countSalary} />
      <Button handleClick={decrement}>Decrement</Button>

      <Footer />
    </>
  );
};

export default Parent;
