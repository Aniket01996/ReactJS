import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import './App.css';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import FuncState from './Components/FuncState';
import ClassState from './Components/ClassState';
import Welcome from './Components/Welcome';
import img1 from './Screenshot 2023-05-03 151903.jpg'
import img2 from './reactjsVSreactNative.jpg'
import img3 from './lcms.png'
import img from './funsVSstate.png'
import Lifecycle from './Components/Lifecycle';
import CheckUser from './Components/ConditionalRendering/CheckUser';
import Ternary from './Components/ConditionalRendering/Ternary';
import FetchAPI from './Components/ApiCalls/FetchAPI';
import AxiosCall from './Components/ApiCalls/AxiosCall';
import CompA from './Components/PropsDrilling/CompA';
import StateUplifting from './Components/StateUplifting';
import CompoA from './Components/ContextAPI/CompoA';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Routing/Home';
import Contact from './Components/Routing/Contact';
import About from './Components/Routing/About';
import Error from './Components/Routing/Error';
import UseState from './Components/Hooks/UseState';
import UseReducer from './Components/Hooks/UseReducer';
import UseEffect from './Components/Hooks/UseEffect';
import UseMemo from './Components/Hooks/UseMemo';
import UseRef from './Components/Hooks/UseRef';
import ClickCounter from './Components/HOC/ClickCounter';
import HoverCounter from './Components/HOC/HoverCounter';
import ControlledCompo from './Components/ControlledCompo';
import UncontrolledCompo from './Components/UncontrolledCompo';

function App() {
  const name = "Aniket bhalerao"
  const codeString = `import React, { Component } from 'react'

  export class ClassState extends Component {
    state = {
      name: "Hello world"
    }
    updateName = () => {
      this.setState({ name: "Welcome to Prepbytes" })
    }
    render() {
      return (
        <div>
          {this.state.name} <br />
          <button onClick={this.updateName}>Click me!</button>
        </div>
      )
    }
  }
  
  export default ClassState
  `
  const codeFunc = `import React, { useState } from 'react'

  const FuncState = () => {
      const [name, setName] = useState('')
      const handleChange = (e) => {
          setName(e.target.value)
      }
      const [count, setCount] = useState(0)
      const updateCount = () => {
          setCount(count + 1)
      }
      return (
          <div>
              <label htmlFor="name">Type here : </label>
              <input type="text" value={name} onChange={handleChange} />
              <p>You typed : {name}</p>
              <p>Count : {count}</p>
              <button onClick={updateCount}>Update Count!</button>
          </div>
      )
  }
  
  export default FuncState
  `
  const propsEX = `import React from 'react'
    
  const Welcome = (props) => {
      return (
      <div>
      <h1>Name : {props.name}</h1>
      </div>
)
}
export default Welcome
 
function App(){
  return(
    <Welcome name="Alice" />
    <Welcome name="Bob" />
    <Welcome name="Charlie" />
  )
}`
  const lcm = `import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log("Component is mounted")
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
        console.log("Component is updated with each click")
    }
    componentWillUnmount(){
        console.log("Component unmounted") // As soon as we remove a component or comment anything
    }
    render() {
        return (
            <div>
                <div> Lifecycle Methods: {this.state.count}</div>
                <button onClick={this.increment}>Click me!</button>
            </div>
        )
    }
}

export default Lifecycle
`
  const stateful = `import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default Counter;
`
  const stateless = `import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
`
  const checkuser = `import React from 'react'
import Login from './Login'
import Logout from './Logout'

const CheckUser = ({user}) => {
    if(user===true){
      return <Login />
    }
    else {
      return <Logout />
    }
}
export default CheckUser
----------------------------
function App(){
  <CheckUser user={true} />
}
`
  let ternary = `import React from 'react'

const Ternary = () => {
    const consistency = true;
    return (
        <div>
            <p>This is an example of Ternary operator</p>
            {consistency ?
                <div style={{ color: 'green' }}>You will Suceed</div> :
                <div style={{ color: 'red' }}>You have to try harder</div>}

            <p>This is an example of AND Operator</p>
            {consistency && <div style={{ color: 'green' }}>You are good to go!!</div>}
        </div>
    )
}

export default Ternary
`
  const fetch = `import React, { useEffect, useState } from 'react'

  const FetchAPI = () => {
      const [data, setData] = useState([])
      useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users/")
              .then(
                  response => response.json()  //converting into json format
              )
              .then(
                  data => {
                      setData(data)
                      console.log(data)
                  })
      }, [])   //Empty dependency array to handle repetative calls
      return (
          <div>
              <p>Fetch API Call</p>
              <ul>
                  {data && data.map((item, index) => {
                      return (
                          <li key={index}>{item.name}</li>
                      )
                  })}
              </ul>
          </div>
      )
  }
  
  export default FetchAPI  
`
  const axios = `import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  
  const AxiosCall = () => {
      const [data, setData] = useState([])
      useEffect(() => {
          axios.get("https://jsonplaceholder.typicode.com/users/")
              .then( (response) => { 
                  console.log(response.data)
                  setData(response.data)
               })
              .catch((error) => {
                console.log("Error found here", error)
              })
      }, [])
      return (
          <div>
              <p>Axios API Call</p>
              <ul>
                  {data && data.map((item, index) => {
                      return (
                          <li key={index}>{item.username}</li>
                      )
                  })}
              </ul>
          </div>
      )
  }
  export default AxiosCall
`
  const propsdrilling = ` function App(){
  const name = "Aniket bhalerao" // data from parent component passed
}
return (
  <CompA data={name}/>
)
-------------------------------
import React from 'react'
import CompB from './CompB'

const CompA = ({data}) => {
  return (
    <div>
      <h3>CompA : <CompB data={data}/></h3>
    </div>
  )
}
export default CompA
-------------------------------
import React from 'react'
import CompC from './CompC'

const CompB = ({data}) => {
  return (
    <div>
        <h3> CompB : <CompC data={data}/></h3>
    </div>
  )
}
export default CompB
-------------------------------
import React from 'react'
import CompD from './CompD'

const CompC = ({data}) => {
  return (
    <div>
      <h3>CompC : <CompD data={data}/></h3>
    </div>
  )
}
export default CompC
-------------------------------
import React from 'react'

const CompD = ({data}) => {
  return (
    <div> // data consumed 
      <h3>CompD : Finally we have our data from Parent component - App.js : {data}</h3>
    </div>
  )
}
export default CompD
`
  const stateUplifting = `import React, { useState } from "react";

const StateUplifting = (props) => {
const [name, setName] = useState("")
const handleSubmit = (e) => {
    e.preventDefault()
    props.getData(name)
    // console.log(name)
}
return (
    <div>
        <p>State Uplifting :</p>
        <form action="">
            <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={handleSubmit}>Click me!</button>
            <p>Typed text : {name}</p>
        </form>
    </div>
)
}
export default StateUplifting
--------------------------------
function App(){
  const getData = (data) => {
    console.log("This data is from child component :", data)
  }
  return (
    <StateUplifting getData={getData}/>
  )
}
export default App;
`
  const contextAPI = `import React, { createContext } from 'react'
import CompoD from './CompoD'

// Create a context object
const context = createContext()

const CompoA = () => {
    const greeting = "Hello World !"
  return (
    <div>
      <h3>CompoA : {greeting}</h3>
      <context.Provider value={greeting}>
        <CompoD/>
      </context.Provider>
    </div>
  )
}
export default CompoA
export {context}
-------------------------------------
import React, { useContext } from 'react'
import { context } from './CompoA'

const CompoD = () => {
    // Use the context object to access the data passed down from CompA
    const Context = useContext(context)
    return (
        <div>
            <h3>CompoD : Received our data from CompoA : {Context}</h3>
        </div>
    )
}
export default CompoD
`
  const routing = ` function App(){
  return (
    <div className="routing">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
--------------------------------------------
import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <h2  className='heading'>Routing</h2>
            <div className='nav'>
                <NavLink className={Nav} to={'/'}>Home</NavLink>
                <NavLink className={Nav} to={'/contact'}>Contact</NavLink>
                <NavLink className={Nav} to={'/about'}>About</NavLink>
            </div>
        </>
    )
}
export default Nav
----------------------------------------
import React from 'react'
import Nav from './Nav'

const Home = () => {
    return (
        <div>
            <Nav />
            <h2>Home Page... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        </div>
    )
}
export default Home
----------------------------------------
import React from 'react'
import Nav from './Nav'

const Contact = () => {
  return (
    <div>
        <Nav/>
      <h2>  Contact Us... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
    </div>
  )
}
export default Contact
-----------------------------------------
import React from 'react'
import Nav from './Nav'

const About = () => {
  return (
    <div>
        <Nav/>
      <h2>About Us... &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
    </div>
  )
}
export default About
------------------------------------------
import React from 'react'
import Nav from './Nav'

const Error = () => {
  return (
    <div>
        <Nav/>
      <h2>Error 404 : Page not found :(</h2>
    </div>
  )
}
export default Error


`
  const getData = (data) => {
    console.log("This data is from child component :", data)
  }
  const useState = `import React from 'react'
  import { useState } from 'react'
  
  const UseState = () => {
      const [count, setCount] = useState(0)
  
      const increment = () => {
          setCount(count + 1)
      }
      const decrement = () => {
          setCount(count - 1)
      }
      return (
          <div>
              <p>Count : {count}</p>
              <button onClick={increment}>Increment</button>
              <button onClick={decrement}>Decrement</button>
          </div>
      )
  }
  export default UseState
  `
  const useReducer = `import React from 'react'
  import { useReducer } from 'react';
  
  const UseReducer = () => {
      const initialState = 0;
  
      const reducer = (state, action) => {
          switch (action.type) {
              case 'increment':
                  return state + 1
              case 'decrement':
                  return state - 1
              default:
                  return state
          }
      }
      const [count, dispatch] = useReducer(reducer, initialState)
      return (
          <div>
              <p>Counter Reducer : {count}</p>
              <button onMouseOver={()=>{dispatch({type:'increment'})}}>Increment !</button>
              <button onMouseOver={()=>{dispatch({type:'decrement'})}}>Decrement !</button>
          </div>
      )
  }
  export default UseReducer
  `
  const useEffect = `import React from 'react'
  import { useEffect } from 'react'
  import { useState } from 'react'
  
  const UseEffect = () => {
      const [data, setData] = useState([])
      useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/users/")
              .then(
                  response => response.json()
              )
              .then(data => {
                  setData(data)
                  console.log(data)
              })
              .catch(error => console.log("Error caught here", error))
      }, [])
      return (
          <div>
              <ul>
                  {data && data.map(item => (
                      <li key={item.id}> {item.name}</li>))}
              </ul>
          </div>
      )
  }
  
  export default UseEffect
  `
  const useMemo = `import React from 'react'
  import { useMemo } from 'react'
  import { useState } from 'react'
  
  const UseMemo = () => {
      const [add, setAdd] = useState(0)
      const [sub, setSub] = useState(0)
  
      const multiplication = useMemo(function multi() {
          console.log("***")
          return add * 10
      }, [add])
      return (
          <div>
              <p>OptMemo : {multiplication} </p>
              <h3>Increment : {add}</h3>
              <h3>Decrement : {sub}</h3>
              <button onClick={()=>{setAdd(add+1)}}>Increment !</button>
              <button onClick={()=>{setSub(sub-1)}}>Decrement !</button>
          </div>
      )
  }
  
  export default UseMemo
  `
  const useRef = `import React, {useRef} from 'react'

  const UseRef = () => {
      const nameRef = useRef();
      const emailRef = useRef();
  
      const handleSubmit = (e) => {
          e.preventDefault()
          console.log("name is :", nameRef.current.value)
          console.log("email is :", emailRef.current.value)
      }
      return (
          <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" name='name' ref={nameRef} />
                  <input type="text" name='email' ref={emailRef} />
                  <input type="submit" value={"Submit"} />
              </form>
          </div>
      )
  }
  
  export default UseRef
  `
  const HOC = `import React from 'react'
  import { useState } from 'react'
  
  const HOCComponent = (WrappedComponent) => {
      const HocFunction = () => {
          const [counter, setCounter] = useState(0);
  
          const updateCounter = () => {
              setCounter(counter + 1)
          }
          return (
              <div>
                  <WrappedComponent counter={counter}
                      updateCounter={updateCounter} />
              </div>
          )
      }
      return HocFunction
  }
  export default HOCComponent
  -----------------------------------------
  import React from 'react'
import HOCComponent from './HOCComponent'

const HoverCounter = (props) => {
    console.log(props) 
    return (
        <div>
            <p>Handle Hover : {props.counter}</p>
            <button onMouseOver={props.updateCounter}>Hover !</button>
        </div>
    )
}
export default HOCComponent(HoverCounter) 
-------------------------------------------
import React from 'react'
import HOCComponent from './HOCComponent'

const ClickCounter = (props) => {
    console.log(props)
  return (
    <div>
      <p>Click Counetr : {props.counter}</p>
      <button onClick={props.updateCounter}>Click !</button>
    </div>
  )
}
export default HOCComponent(ClickCounter) 
  `
  const controlledComponent = `import React from 'react'
  import { useState } from 'react'
  
  const ControlledCompo = () => {
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const handleSubmit = (event) => {
          event.preventDefault()
          console.log("name is : ", name)
          console.log("email is : ", email)
      }
      return (
          <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} required />
                  <input type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
                  <input type="submit" value={"Submit"} />
              </form>
          </div>
      )
  }
  
  export default ControlledCompo
  `
  const uncontrolledComponent = `import React from 'react'
  import { useRef } from 'react'
  
  const UncontrolledCompo = () => {
      const nameRef = useRef()
      const emailRef = useRef()
  
      const handleSubmit = (e) => {
          e.preventDefault()
          console.log("name is :", nameRef.current.value)
          console.log("email is :", emailRef.current.value)
      }
      return (
          <div>
              <form onSubmit={handleSubmit}>
                  <input type="text" name='name' ref={nameRef} required />
                  <input type="text" name='email' ref={emailRef} required />
                  <input type="submit" value={"Submit"} />
              </form>
  
          </div>
      )
  }
  
  export default UncontrolledCompo
  `
  return (
    <div className="App">
      <div className="heading">
        <span> <h1>ReactJS Interview Preparation</h1></span>
        <span><h3>- Aniket bhalerao.</h3></span>
      </div>
      <hr />
      <h2> Virtual DOM</h2>
      <p>VDOM is a programming concept where an ideal/virtual representation of a UI is kept in memory and synced with the 'real' DOM by a library called ReactDOM. <br />This process is called as <b>Reconciliation</b> <br />A virtual DOM object has the same properties as a real DOM object but it lacks the real things power to change what's on screen <br /> The process of comparing the current VDOM tree with the previous one is called as <b>Diffing</b> </p>

      <h2> Single Page Application - SPA</h2>
      <p>A single page application is one that does'nt need to reload the page during its use. <br /> Since react works on states, React does not need to reload the page, onlt the states change witll take us to next page <br />Example - YouTube, Facebook, Netflix, Weather App etc.</p>
      <h2>Difference between Function components and class components.</h2>
      <img src={img} alt="" />

      <h2>Difference between States and Props</h2>
      <img src={img1} alt="" />
      <h3>State</h3>
      <p>A state is built-in React object that is used to contain data or information about a component. <br />A components state is changed over-time and whenever it changes, the component re-renders</p>
      <div>
        <b><p>Using class based component</p></b>
        <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
          {codeString}
        </SyntaxHighlighter>
        Output :  <ClassState /> <hr />
        <b><p>Using Functional based component</p></b>
        <SyntaxHighlighter className="syntax" language="javascript" style={atomDark}>
          {codeFunc}
        </SyntaxHighlighter>
        Output : <FuncState /> <hr />
      </div>
      <h2>Props</h2>
      <p>Props - Properties are the arguments that are passed from parent component to the child coomponent i.e in a uni-directional way. <br />Basically, data from one component to another.</p>
      <p>A simple example : -</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {propsEX}
      </SyntaxHighlighter>
      <div>  Output :
        <Welcome name="Alice" />
        <Welcome name="Bob" />
        <Welcome name="Charlie" />
      </div> <hr />
      <h2>What is JSX and why do we use it instead of JS</h2>
      <p>JSX stands for "JavaScriptXML". <br /> It allows us to write HTML elements in JS and place them in the DOM without any createElement() or appendChild() menthods <br />JSX coverts HTML tags into react elements</p>
      <hr />
      <h2> What is package.json</h2>
      <p>The package.json file contains descriptive and functional metadata about a project, such as name, version, dependencies etc. </p>
      <hr />
      <h2> Difference between ReactJS and ReactNative</h2>
      <img src={img2} alt="" />
      <hr />
      <h2> React lifecycle methods with examples</h2>
      <p>In simple terms, the react component life cycle is the lifetime of a component. <br /> Lifecycle methods are series of events that happen throughout <b>birth, growth, death</b> of a react component. </p>
      <p>In ReactJS, components go through a lifecycle of events namely -</p>
      <ul>
        <li><b> 1.</b> Mounting - (Adding nodes to the DOM)</li>
        <li><b> 2.</b> Updating - (Altering existing nodes in the DOM)</li>
        <li><b> 3.</b> Unmounting - (Removing nodes from the DOM)</li>
      </ul>
      <img src={img3} alt="" className='lcms' />
      <p>A simple example to demonstrate -</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {lcm}
      </SyntaxHighlighter>
      Output : <Lifecycle /> <hr />
      <h2>Lazy loading in React</h2>
      <p>Lazy loading is a desing pattern that allows us to load parts of our application on-demand to reduce the initial load time.</p>
      <hr />
      <h2>Difference between Stateful and Stateless Components</h2>
      <h3>Stateful components</h3>
      <p>Stateful components are also known as "class components" because they are defined using a JavaScript class. <br /> These components have a state object that can be used to store and update data throughout the component's lifecycle. <br /> Stateful components also have access to the full range of React lifecycle methods. <br /> These components are commonly used when you need to maintain the state of your application, handle complex user interactions, and render dynamic content.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {stateful}
      </SyntaxHighlighter>
      <h3>Stateless Components </h3>
      <p>Stateless components, on the other hand, are also known as "functional components" because they are defined as JavaScript functions. <br /> These components do not have a state object and are generally used to render static content or to render content based on props passed down from parent components. <br /> Stateless components are simple and lightweight, making them a good choice for simple UI elements that do not require any internal state management.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {stateless}
      </SyntaxHighlighter> <hr />
      <h2>Conditional Rendering</h2>
      <p>Conditional rendering basically allows us to render different React components or elements <b>if a condition is met. </b> <br />There are three types - <br /> 1. if-else (Suitable in case of 2 different components) <br />2. AND Operator - && (Works for true condition only) <br />3. Ternary Operator - ? (Suitable for 1 single JSX only)</p>
      <div><h4>Using if-else condition</h4>
        <p>Explaination : Step 01- created 3 files -  <br /> 1. CheckUser.js <br /> 2. Login.js <br /> 3. Logout.js</p>
        <p><strong>Step 2 - </strong>In app.js called checkUser component and passed props value as true </p>
        <p><strong>Step 3 - </strong>Output will be based on boolean value given inside the props in function App() </p>
        <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
          {checkuser}
        </SyntaxHighlighter>
        Output :  <CheckUser user={true} /> </div>
      <h4>Using AND Operator and Ternary operator </h4>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {ternary}
      </SyntaxHighlighter>
      Output : <Ternary /> <hr />
      <h2> Difference between fetch and Axios</h2>
      <h2>Fetch API</h2>
      <p>The Fetch API is a tool that enable us to make http requests easily using JS promises.</p>
      <p>Note that API calling is basicaly requesting data from a server i.e outside world and in React this phenomenon is called as a 'side effect'. <br />In order to manage or handle a side effect we have a hook called as 'useEffect'.</p>
      <p>Also as we know that the data we fetch will be visible in console and not on the screen/JSX. <br />So, in order to get the data on screen or JSX we have another hook called as 'useState'.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {fetch}
      </SyntaxHighlighter>
      Output : <FetchAPI /> <hr />
      <h2>Axios </h2>
      <p>Axios is a third party library that is used to make http requests same as fetch()</p>
      <p>Difference between them is that in fetch we have to convert the response in json format but in axios the data is already returned in json format</p>
      <h3>Why prefer axios over fetch?</h3>
      <p>It has good defaults to work with JSON data. <br />
        Axios has function names that match any http methods to perform a <b>GET</b> request, we use .get() method. <br />
        It does more with less code. <br />
        Axios can be used on server as well as client. If we're writing a node.js app, it can also be used in any environment seperate from the browser. </p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {axios}
      </SyntaxHighlighter>
      Output : <AxiosCall /> <hr />
      <h2>Props drilling</h2>
      <p>Props drilling is a process when we pass down props multiple levels (from parent to child) to a nested component through components that don't need it.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {propsdrilling}
      </SyntaxHighlighter>
      Output : <CompA data={name} /> <hr />
      <h2>State Uplifting</h2>
      <p>State uplifting also known as state hoisting is a mechanism through which we can lift up a child state and consume or access it inside our parent component.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {stateUplifting}
      </SyntaxHighlighter>
      Output : <StateUplifting getData={getData} /> <hr />
      <h2>Context API</h2>
      <p>A React feature that allows us to pass down and use/consume data in whichever component we need in our React App without using props. <br />Context API basically helps us to avoid the problem of prop drilling.</p>
      <p>Four steps for using context API -</p>
      <p><b>01. </b>Create a context object using "createContext()" method. <br />
        <b>02. </b>Wrap the context provider around your components. <br />
        <b>03. </b>Put any value on context provide using the 'value' prop. <br />
        <b>04. </b>Access that value within any component by using 'context consumer'.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {contextAPI}
      </SyntaxHighlighter>
      Output : <CompoA /> <hr />
      <h2>Higher Order Components - HOC</h2>
      <p>A HOC is a function that takes in a component as a parameter and returns a new component with enhanced features/ additional functionality.</p>
      <p>const newComponent = higherFunction(WrappedComponent);</p>
      <p>In above example - <br /> newComponent - will be the enhanced component. <br /> higherFunction - This function will ennhance wrappedComponent. <br /> WrappedComponent - The component whose functionality we want to extend/enhance/upgrade.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {HOC}
      </SyntaxHighlighter>
      Output :  <ClickCounter/> <HoverCounter/>
      <p><b>Explaination : </b> <br /> In this code, the HOCComponent function takes a WrappedComponent as its argument, and returns a new functional component that wraps the WrappedComponent and provides it with the counter state variable and the updateCounter function as props. <br />
        The HoverCounter and ClickCounter components are then passed to HOCComponent, which returns new components that have the counter and updateCounter props from the HOCComponent.</p>
        <hr />
        <h2>Controlled vs Uncontrolled components</h2>
        <h3>Controlled components.</h3>
        <p>Controlled components are those whose form data is handled by the components state.</p>
        <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {controlledComponent}
      </SyntaxHighlighter>
      Output : <ControlledCompo/> <hr />
      <h3>Uncontrolled components.</h3>
      <p>Uncontrolled components are those for which the form data is handled by 'DOM' itself. <br />These components are not controlled by React state and hence, called as 'Uncontrolled components'.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {uncontrolledComponent}
      </SyntaxHighlighter>
      Output : <UncontrolledCompo/> <hr />
      <h2>NPM - Node package manager</h2>
      <p>It is the default package manager for JavaScripts's runtime Node.js</p>
      <p>It consists for two main parts - <br /><b>01.  </b>A CLI (command-line-interface) tool for publishing and downloading packages. <br /><b>02. </b>An online-repository that hosts JS packages. </p>
      <hr />
      <h2>Memory leak</h2>
      <p>A memory leak in React is a type of resource leak that occurs when an application incorrectly manages memory allocation. <br />That memory which is not needed anymore is not released for other processes to use. <br />A memory leak may happen when an object is stored in a memory but cannot be accessed by running code.</p>
      <p>In order to fix this problem, cancell all subscriptions and asynchronous tasks in the componentWillUnmount method.</p>
      <p>To clean up memory leaks we can use -</p>
      <p><b>01. </b>Boolean flags <br />
        <b>02. </b>Abort controller <br />
        <b>03. </b>use-State-if-mounted hook <br />
        <b>04. </b>Cleaning intervals</p> <hr />
      <h2>Routing</h2>
      <p>Routing in React allows you to build single-page applications with multiple views or pages that are dynamically rendered based on the current URL or user actions. <br /> There are many third-party routing libraries available for React, but the most popular one is react-router.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {routing}
      </SyntaxHighlighter>
      Output :
      <div className="routing">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div> <hr />
      <h1>Hooks -</h1>
      <h2>useState</h2>
      <p>useState hook is a built-in React hook that allows us to add state to a functional component. <br />It returns an array with 2 values - <br /><b>01.</b> The current state value <br /><b>02. </b>A setter function to update the state.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {useState}
      </SyntaxHighlighter>
      Output : <UseState /> <hr />
      <h2>useReducer()</h2>
      <p>useReducer hook is a built-in React hook that allows us to manage complex state in function component. <br />It is basically an alternative to 'useState' hook. </p>
      <p>The 'useReducer' hook returns an array with 2 values - <br /><b>01. </b>The current state value <br /><b>02. </b>A function to dispatch an action to update the state.</p>
      <p>It basically accepts a reducer function as first parameter and an initial state as the second parameter.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {useReducer}
      </SyntaxHighlighter>
      Output : <UseReducer /> <hr />
      <h2>useEffect()</h2>
      <p>useEffect hook is a built-in React hook that allows us to perform/ handle the side effects in a function component. <br />The side effects includes <b>'Fetching data from an API', 'Updating document titles', 'Setting up an event listener', 'Handling sunscriptions'</b> etc.</p>
      <p>useEffect hook takes 2 arguments - <br /><b>01. </b>A callback function that performs the side effect. <br /><b>02. </b>A dependency array.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {useEffect}
      </SyntaxHighlighter>
      Output : <UseEffect /> <hr />
      <h2>useContext()</h2>
      <p>useContext is a built-in React hook that allows us to use the context API to provide and consume data across the component tree <br /> without having to pass props down manually at every level. <br /> Basically useContext hook is used to consume data from a context object created by 'createContext()' function.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {contextAPI}
      </SyntaxHighlighter>
      Output : <CompoA /> <hr />
      <h2>useMemo()</h2>
      <p>The useMemo hook is a built-in React hook that allows us to memoize a function or a value so that it is only re-computed with its dependencies change. <br />This can help optimize performance by reducing unnecessary re-computations.</p>
      <p><b>Memoization</b> is an optimization technique for accelerating computer programs by caching the result of heavy function calls and return them when similar inputs are encountered repeatedly.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {useMemo}
      </SyntaxHighlighter>
      Output : <UseMemo /> <hr />
      <h2>useRef()</h2>
      <p>The 'useRef' hook in React allows us to provide a way to create a mutable  variable that persists between renders. <br />It returns a mutable 'ref' object that can be used to store a value that persists across renders.</p>
      <SyntaxHighlighter className="syntax" language="javascript" style={atomDark} wrapLongLines={true}>
        {useRef}
      </SyntaxHighlighter>
      Output : <UseRef /> <hr />

    </div>
  );
}
export default App;