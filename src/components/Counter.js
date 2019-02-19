import React, { useState } from "react";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className="Container">
        <h1>
          {count < 10 ? count.toString().padStart(2, "0") : count.toString()}
        </h1>
        <div className="Button-Container">
          <button onClick={() => setCount(count + 1)}>Click to Count</button>
          <button onClick={() => setCount(0)}>Click to Reset</button>
        </div>
        <p>
          Number and input are inside a Functional Component &nbsp;
          <code>Counter.js</code>
        </p>
      </div>
    </div>
  );
}
