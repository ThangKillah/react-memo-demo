import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Test = ({ name, count }) => {
  console.log("render");
  const [id, setId] = useState(0);
  useEffect(() => console.log("effect"), []);
  return (
    <>
      <h1>ID: {id}</h1>
      <h1>Count: {count}</h1>
      <button onClick={() => setId(Math.floor(Math.random() * 10))}>
        Random number
      </button>
    </>
  );
};

const Test2 = React.memo(Test);

function App({ date }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [count, setCount] = useState(0);

  function onCountChange(byValue) {
    setCount(count + byValue);
    setCurrentDate(new Date());
  }

  function formatDate() {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return `${hour}:${minute}:${second}`;
  }

  const prettyDate = formatDate();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        You clicked {count} times, last time at {prettyDate}!
      </h2>

      <button onClick={() => onCountChange(-1)}>Decrement</button>
      <button onClick={() => onCountChange(1)}>Increment</button>

      <Test2 name="ThangBT" count={count} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App date={new Date()} />, rootElement);
