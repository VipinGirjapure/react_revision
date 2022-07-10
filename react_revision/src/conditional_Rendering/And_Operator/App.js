import "./App.css";
import Garage from "./conditional_Rendering/And_Operator/Garage";
function App() {
  const cars = ["Ford", "Skoda", "Merc"];
  return (
    <>
      <Garage Cars={cars} />
    </>
  );
}

export default App;
