# react_revison



DAY 1 (8-07-2022)

What is Virtual DOM
What is SPA
What is difference between class and functional component
What does mean by state and its use in react?
What is JSX and why do we use it instead of js?
How do you use pass data from one component to another 

DAY 2 ()

What is the Difference between react and react native? Which one is library or framework?
What is the package name you are using for routing 
What is package.json
Routing Implementation
How do you pass data from parent to child
What is lazy loading in react ?

DAY 3 ()

Difference b/w Stateful and stateless Component
How do you switch one component to another, Conditional Rendering
Difference between Axios and fetch
What are React Life cycles Explain each one with Example
What is UseState Hook ?(Implementation)
What is useEffect Hook ?(Implementation)
What is UseReducer Hook ?(Implementation)


1. What is Virtual DOM

"Virtual DOM is a light weight copy of original dom .It is used to compare changes with original dom. There are two virtual dom created."

 DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time.
 Whenever React components gets mounted on the screen for the first time.
 Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM.
 So we are having two virtual doms, one virtual dom gets created at the time of mounting of react component so it is a copy of your real dom.
 Another virtual dom is the dom which contains the new changes, updated state variables values. 
 Now these two virtual doms will get compared with each other and will check for the new changes.
 this complete procedure is known as diffing algorithm. 
 Now the new changes will be updated in your Real dom. this procedure is known as Recoinciliation.


2. What is SPA ?

Single page application 
SPA is reload only part of application which needs to change .
SPA is no need to reload.
Because of no reloading website is very fast ans it increases user interface.


3. What is difference between class and functional component

Class Component - Class needs to extends from react
Class Component has render method

functional component are stateless.
class component are statefull bcoz it can implement on state.
class component has life cycle method .
In class component has constructor.
Hooks can only use in functional components.

4. What does mean by state and its use in react ?

It is an object holds some information that may changed over life time of component and 

State is private to component where it is created 
State can not be passed into another object.

5. What is JSX and why do we use it instead of js ?

JSX full form is JavaScript XML(Extensible Markup Language), which allows us to write HTML in React.
JSX makes it easier for us to write and add HTML to React.
JSX tag has tag name, attributes and children which make it look like xml.
JSX allows us to write HTML elements in JavaScript and place it in the DOM. 
JSX makes it easier to write React applications and converts HTML tags into react elements.
Babel 

6. How do you use pass data from one component to another ?

To pass a data from one component to another component we have Props in React.js.


import Parent from "./components/Parent";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Parent/>
    </div>
  );
}
import Child from "./Child"
const Parent = () =>{
  const data = "HI React"
  return(
    <Child props={data}/>
  )
}
export default Parent ;



const Child = (props) => {
  return (
    <h1>
  {props.props}
    </h1>
  )
}
export default Child

<!--  -->
7. What is the Difference between react and react native? Which one is library or framework?  

React - Js library used for User Interface.
React Native - It is a framework used fro mobile app development.

React - React is used for developing web-based applications.
React Native - is used in mobile app development.

React - The Virtual DOM renders the browser code.
React Native - Uses platform-specific APIs to render code for mobile applications.

React - React has no dependency on a particular platform.
React Native - React Native is platform-dependent (to a degree).

React - CSS Animation
React Native - React Native offers its custom tools (Animated API, Reanimated).


8. What is the package name you are using for routing ? 

<!-- npm install react-routing-dom -->
npm i react-router

Create React App doesn't include page routing.
React Router is the most popular solution.

<BrowserRouter> is a wrapper. 
<Routes> wraps all routes.
<Route>

 <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
 </BrowserRouter>


9. What is package.json ? 
A package.json file it is a JSON file that lives in the root directory of your project. 
Your package.json holds important information about the project. 
It contains human-readable metadata about the project (like the project name and description) as well as functional metadata like the package version number and a list of dependencies required by the application.

10. Routing Implementation ? 

11. How do you pass data from parent to child ? 

12. What is lazy loading in react ?
13. Difference b/w Stateful and stateless Component
14. How do you switch one component to another, Conditional Rendering
15. Difference between Axios and fetch
16. What are React Life cycles Explain each one with Example
17. What is UseState Hook ?(Implementation)
18. What is useEffect Hook ?(Implementation)
19. What is UseReducer Hook ?(Implementation)
