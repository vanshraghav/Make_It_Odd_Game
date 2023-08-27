import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1 className="heading" id="main">
        Odd-O-Matic Challenge: Can You Keep It Odd?
      </h1>
      <div className="container">
        <button className="Buttons" onClick={decrease} onMouseDown={decrease}>
          -
        </button>
        <h1 className="heading"> {count}</h1>

        <button className="Buttons" onClick={increase} onMouseDown={increase}>
          +
        </button>
      </div>
    </div>
  );
}
