import { createContext, useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
export const Name = createContext();

const Parent = () => {
  const [name] = useState("BEN");
  return (
    <Name.Provider value={{ sendName: name }}>
      <h1>Parent Context API</h1>
      <ChildA />
      <ChildB />
      <ChildC />
    </Name.Provider>
  );
};

export default Parent;
