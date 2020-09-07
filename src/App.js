import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [counterValue, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>The Counter App</h1>
      <button id="increment-btn">Increment</button>
      <p id="counter-value">{counterValue}</p>
      <button id="decrement-btn">Decrement</button>
    </div>
  );
}

export default App;
