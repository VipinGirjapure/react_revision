import "./App.css";
import Store from "./REDUX/Store";
import {Provider} from 'react-redux'
import View from "./REDUX/View";
// import Parent from "./hooks/stateUplifting/Parent";
// import Counter from "./hooks/useCallback/Parent";

// import Parent from "./hooks/context_Api/Parent";
// import Parent from "./hooks/propsDrilling/Parent";
// import CounterMemo from "./hooks/useMemo/CounterMemo";
// import ClassComponent from "./componentsPractice/ClassComponent";
// import Garage from "./componentsPractice/ComponentsInComponents";
// import FunctionalComponent from "./componentsPractice/FunctionalComponents";
// import UseReducer from "./hooks/useReducer/UseReducer";
// import UseReducer2 from "./hooks/useReducer/UseReducer2";
// import UseState from "./hooks/UseState";
// import JsxPractice from "./smallElements/JsxPractice";
// import Goal from "./conditional_Rendering/Ternary_Operator/Goal";
// import NavBar from "./lazyLoading/NavBar";
// import Parent from "./props/Parent";

function App() {

  return <>

<Provider store= {Store}>
  <View/>
</Provider>

  
  
  </>;
}

export default App;
