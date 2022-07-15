import { useState } from "react";

const UseState = () => {
  const [click, setClick] = useState(0);
  return (
    <div className="App">
      <h1>Hi UseState</h1>
      <h2>{click}</h2>
      <button onClick={() => setClick(click + 1)} >
        Click + Here
      </button>
      <button onClick={() => setClick(click - 1)} disabled={click < 1}>
        Click - Here
      </button>
    </div>
  );
};

export default UseState;
