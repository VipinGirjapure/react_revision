React.JS  V18.0.0 

What is REACT.JS?

- React is a javascript library which is use to create frontend of a web-application
- React is created by Facebook(Meta) and releases to the public in July 2013
- React is used for create SPA i.e single page application. Where React only changes what needs to be changed in webpage.

React Environment :

- npx create-react-app my-react-app
- cd my-react-app 
- npm start
- In Browser at localhost:3000 will be your react page output


DAY 1 (8-07-2022)

1. What is Virtual DOM ?
2. What is SPA ?
3. What is difference between class and functional component
4. What does mean by state and its use in react?
5. What is JSX and why do we use it instead of js?
6. How do you use pass data from one component to another 

DAY 2 (11-07-2022)

7. What is the Difference between react and react native? Which one is library or framework?
8. What is the package name you are using for routing 
9. What is package.json
10. Routing Implementation
11. How do you pass data from parent to child
12. What is lazy loading in react ?

DAY 3 (12-07-2022)

13. Difference b/w Stateful and stateless Component
14. How do you switch one component to another, Conditional Rendering
15. Difference between Axios and fetch
16. What are React Life cycles Explain each one with Example
17. What is UseState Hook ?(Implementation)
18. What is useEffect Hook ?(Implementation)
19. What is UseReducer Hook ?(Implementation)

DAY 4 (13-07-2022)

20. What is UseMemo Hook ?(Implementation)
21. What is UseRef Hook ?(Implementation)
22. What is Context api
23. Difference between callback and useCallback Hook ?
24. What is Props Drilling Concept ?What is State Uplifting ?
25. Difference between useEffect and useContext ?

DAY 5 (14-07-2022)

26. High Order Component in react js ?
27. Do you know about SEO ? Is it true that react js supports SEO support
28. What is clean up in useEffect ?
29. What is the use of useCallback and useMemo ? 
30. Why do we need keys in React ?
31. Do you know about redux

DAY 6 (15-07-2022)

32. What is an event in react?
33. What is memory leak and how to overcome?
34. Do you prefer function-based or class component and why ?
35. Explain reducer as pure function in redux
36. Why do we use redux thunk?
37. What do you know about NPM?

1. What is Virtual DOM

"Virtual DOM is a light weight copy of original dom .It is used to compare changes with original dom. There are two virtual dom created."

- DOM is a document object model, created by converting HTML CSS and JS Real DOM, which is an object which gets created whenever any React application gets loaded on the screen for the first time.
- Whenever React components gets mounted on the screen for the first time.
-  Now when any user makes any changes on the screen like button click because of which the state variable will get updated so in this case the changes will not directly go to Real DOM , instead in react we have concept known Virtual DOM.
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
class component are statefull because it can implement on state.
class component has life cycle methods . Functional dont have life cycle methods.
In class component has constructor.   Functional there is no constructor.
Hooks can only use in functional components.

4. What does mean by state and its use in react ?

It is an object holds some information that may changed over life time of component
State is used to change 
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
React Native - It is a framework used for mobile app development.

React - React is used for developing web-based applications.
React Native - is used in mobile app development.

React - The Virtual DOM renders the browser code.
React Native - Uses platform-specific APIs to render code for mobile applications.

React - React has no dependency on a particular platform. (platform means operating system)
React Native - React Native is platform-dependent (to a degree).

React - CSS Animation
React Native - React Native offers its custom tools (Animated API, Reanimated).
<!--  -->


8. What is the package name you are using for routing ? 

npm install react-router-dom  

version 6.3.0

Create React App doesn't include page routing.

React Router is the most popular solution.

React Router is a standard library for routing in React.

It enables the navigation among views of various components in a React Application,
allows changing the browser URL,
and keeps the UI in sync with the URL.

<BrowserRouter> - It is the parent component that is used to store all of the other components.
<Routes> wraps all route.
<Route exact path=" " element={</>}/> : Route is the conditionally shown component that renders some UI when its path matches the current URL.
<Link to=" "> Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

 <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
 </BrowserRouter>

<!--  -->

9. What is package.json ? 

A package.json file it is a JSON file that lives in the root directory of your project. 
Your package.json holds important information about the project. 
It contains human-readable metadata about the project like the project name and description as well as functional metadata like the package version number and a list of dependencies required by the application.
<!--  -->

10. Routing Implementation ? *
- install react-router-dom

- BrowserRouter ->  
<!--  -->

11. How do you pass data from parent to child ? 

React allows us to pass information to a Component (from a parent component to a child component) using something called props (short for properties).

Props is basically an object which is available for all the React components.

Props are read only and cannot be modified by the component to which it belongs. 
<!--  -->

12. What is lazy loading in react ?

- When we appliying router to the react and then we changes page through that routing sometimes some pages needs some more times to load .

- so when this pages loading the data of that page we apply React.lazy() in importing statement.
React.lazy takes callback function and inside that callback functioon we write import path of that component.

- const LazyAbout = React.lazy(() => import("./About")); //make sure that About component is a default export.
- and then wrap thid LazyAbout variable with Suspence which is a inbuild component of React .
- In this we write  <Route
            path="about"
            element={
              <React.Suspense fallback="Loading please wait..">
                <LazyAbout />
              </React.Suspense>
            }
          />
<!--  -->


13. Difference b/w Stateful and stateless Component

Stateful Component - 

- Stateful is a component which has states.
- Stateful keep a track of changing data via the state object.
- Both props and state. We also call these state managers.


Stateless Component —

- Only props, no state. There's not much going on besides the render() function and all their logic revolves around the props they receive.
- Stateless is a component which has no states .
- Stateless component's data is handle by other ways exept state.
- Stateless print out what is given to them via props,or they always render the same thing.

<!--  -->

14. How do you switch one component to another, Conditional Rendering .
- You can switch between components with help of
- In React, you can conditionally render components.There are several ways to do this.

- if Statement
- Logical && Operator
- Ternary Operator (condition ? true : false)
<!--  -->

15. Difference between Axios and fetch

- Both are use to doing API calls to backend ,sending request and getting response.

- Fetch does not take URLs in the object of request while Axios does.
- Fetch in in built in most modern browsers.
- Axios is library which we have to install it in our system.

- In Fetch when we sending data we have to convert it into string 'JSON.stringfy()' and when receving a data we have to convert it to json()
- In Axios we are directly sending data and directly receving it without converting to anything. 

- fetch can not handle network error so we have to handle it manualy by giving if condition on !response.ok
- axios handles errors directly.

- HTTP Intercepter  

- Response timeout(cancel the response after given time)

- fetch we have to write more code like AbortController an dmany more compare to axios
- axios can do this respone timeout by writing a timeout key
which take time in miliseconds

- fetch is limited to some browsers,we have fetch pollyfill for wide browsers support.
- Axios has wide browsers support.

- In fetch we have to write a code for security
- axios has inbuild security for cross typescripting
<!--  -->

16. What are React Life cycles Explain each one with Example.

- Each Component of React has a life cycle which you can monitor and manipulate during its three main phases.
- The three phases are: Mounting, Updating, and Unmounting.

- Initialization: 
- This is the stage where the component is constructed with the given Props and default state. 
- This is done in the constructor of a Component Class.

- Mounting:
- Mounting is the stage of rendering the JSX returned by the render method itself.
-  Mounting phase consists of two predefined functions 
i) componentWillMount() - This function is invoked right before the component is mounted on the DOM.

ii) componentDidMount() - This function is invoked right after the component is mounted on the DOM

- Updating: 
- Updating is the stage when the state of a component is updated and the update component is visible to user.

i) componentWillReceiveProps() - This function is invoked before a mounted component gets its props reassigned.

ii)shouldComponentUpdate() - The Function takes the new Props and new State as the arguments and returns whether to re-render or not.

iii)componentWillUpdate() - This function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.

iv)componentDidUpdate() - This function is invoked after the component is rerendered.

- Unmounting: 
- Unmounting is the final step of the component lifecycle where the component is removed from the page.

i)componentWillUnmount()  : This function is invoked before the component is finally unmounted from the DOM
<!--  -->

17. What is UseState Hook ?(Implementation) *

- version 16.8, a new feature called hooks was added to ReactJS
- useState() hook allows us to declare a state variable inside a function.
- one use of useState() can only be used to declare one state variable. 
- useState accepts an initial state and returns two values:

i) The current state.
ii) A function that updates the state.

- The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!
<!--  -->

18. What is useEffect Hook ?(Implementation) * 

- useEffect is use to enable component life cycle method in functional component.
- useEffect accepts two arguments. The second argument is optional i.e dependency array.

- Syntax : useEffect(<function>, <dependency>)
<!--  -->

19. What is UseReducer Hook ?(Implementation) *

- useReducer is use to manage states in react component.
<!--  -->
 
20. What is UseMemo Hook ?(Implementation) *
- it is use to performence optmization.
- useMemo function takes two parameters i.e callback function and dependency array
<!--  -->

21. What is UseRef Hook ?(Implementation) *
- It is use to access  DOM node directly in functional component.
<!--  -->

22. What is Context api

- it use to avid props drilling .
export const varname = createContext ()
and then <varname.Provider value={{sendName : name} }> - it is a wrapper,where name is a state or any thing that you want to pass.
- and wrap all components in provider in which you want to use this props..

- to use context we have "useContext" 
   ' const {sendName } = useContext(Name) ' use this inside a function and return <h1>Child A{sendName}</h1>
<!--  -->

23. Difference between callback and useCallback Hook ?
- callback is an argument which can pass to another functions as an argument.
- useCallback is  a function  that u can pass to another function as an argument
- callbck is triggered when state is updeted.
- callBack hook is hook that will return a memoized version of the callback fuction that only changes if one of the dependencies has changed.
- It is useful when passing callbacks to optimized child components that rely on reference equility to prevent unneccery renders.
<!--  -->

24. What is Props Drilling Concept ?

- props drilling is a concept where you are passing props to component to component to give to specific component.
- in props drilling you are giving props to that component which have no use other than sending props to annother component.

What is State Uplifting ? 
- state upliftng is concept where you are passing props to parents from children to use this props in parent component.
<!--  -->

25. Difference between useEffect and useContext ?
both are hooks in react
useEffect - IT ALLOWS US TO IMLENENT LIFE CYCLE IN FUNCTIONAL COMP

useContext -  
useEffect RENS WHEN STATE IS MOUNT 


useContext - 
useEffect - 

useContext - 
useEffect 

useContext - 

Context provides a way to pass data or state through the component tree without having to pass props down manually through each nested component. It is designed to share data that can be considered as global data for a tree of React component

<!--  -->

26. High Order Component in react js ?
- Higher-order components or HOC is the advanced method of reusing the component functionality logic. 
- It simply takes the original component and returns the enhanced component.

- Syntax:  'const EnhancedComponent = higherOrderComponent(OriginalComponent);'

- HOC is Easy to handle.
- HOC is used to get rid of copying the same logic in every component.
- HOC makes code more readable.

<!--  -->


27. Do you know about SEO ? Is it true that react js supports SEO support

- Search engine optimization (SEO) is the process of structuring and organizing a website to expand the volume of traffic by increasing its position and frequency of appearance in search engines, 
focusing on keywords that reveal the specifics of the site. 
- It helps bring as many people to your web service as possible and helps create organic traffic on your website,
 turning your visitors into customers.
 - Yes, it is true that react js supports SEO support.

<!--  -->

28. clean up in useEffect?
- Clean up in useEffect is componentDidUnmount which is component life cycle method.
- you just need to return from useEffect

syntax :

useEffect(()=>{
effect
}
return()=>{
  cleanup
}
,[])

useEffect (() => {
  window.addEventListener(logmouseposition)
  return ()=> {
    window.removeEventListener(logmouseposition)
  }
},[])

useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will be called every 2 seconds');
  }, 2000);

  return () => clearInterval(interval);
}, []);



<!--  -->

29. What is the use of useCallback and useMemo .
- useCallback gives you referential equality between renders for functions.
 And useMemo gives you referential equality between renders for values.

useCallback and useMemo both expect a function and an array of dependencies.
The difference is that useCallback returns its function when the dependencies change while useMemo calls its function and returns the result.
<!--  -->

30. Why do we need keys in react list.

- to unique identification of each item in list.
- key is add like props. i.e <Counter key={index}/>

<!--  -->

31. Do you know about redux ?

Redux is a JavaScript library that can be used to managing and maintaining the state of our applications.
Most of the time Redux is playing with React. But you can use it with other frameworks as well.

View - webpage 

Actions : What to do ?

Reducer : How to do ?

Store : object which holds the states of the application.

<!--  -->


32. What is an event in react?

- An event is an action that could be triggered as a result of the user action or system generated event. 
- For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events.
- React has its own event handling system which is very similar to handling events on DOM elements. 
- The react event handling system is known as Synthetic Events. 
- The synthetic event is a cross-browser wrapper of the browser's native event.
- There are some differences in js events and Synthetic events like follows :
- 1.  React events are named as camelCase instead of lowercase.
- 2. With JSX, a function is passed as the event handler instead of a string. 

- For example: In JS onclick="showMessage()"
               In REACT onClick={showMessage}  

- 3. In react, we cannot return false to prevent the default behavior. We must call preventDefault event explicitly to prevent the default behavior

<!--  -->

33. What is memory leak and how to overcome?

- Memory leaks in React applications are primarily a result of not cancelling subscriptions made when a component was mounted before the component gets unmounted. 
- These subscriptions could be a DOM Event listener, a WebSocket subscription, or even a request to an API.
- to overcome it we have to remove this with componentDidUnmount 
<!--  -->

34. Do you prefer function-based or class component and why ?
- I prefer functional component because it is same as simple javascript functions like syntax and no need of contructors like class components and no use this explicitily eevrytime.
<!--  -->

35. Explain reducer as pure function in redux.

- In redux, the reducers are the pure functions that contain the logic and calculation that needed to be performed on the state. 
- These functions accept the initial state of the state being used and the action type. 
- It updates the state and responds with the new state. 
- This updated state is sent back to the view components of the react to make the necessary changes.
- we can say that Reducer’s work is to return the updated state and to also describe how the state changes.

<!--  -->

36. Why do we use redux thunk?

- Thunk is a logical concept in programming where you deal with a function that is primarily used to delay the calculation or evaluation of any operation.

- Redux Thunk acts as a middleware that will return you a function instead of an object while calling through the action creators.

- The returned function receives the dispatch method from the store and then later it is used to dispatch synchronously inside the body of function once the asynchronous actions have been completed. 

<!--  -->

37. What do you know about NPM ?

- Npm (Node package manager) is the standard package manager of the Node.js ecosystem. 
- It’s the most extensive online package repository, containing over one-million packages.
- Also, it’s a command-line interface tool used by developers to manage their Node.js projects.

<!--  -->
