import React, { Component } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          This app diplays the functionality of hooks from React
          <Counter />
        </div>
      </div>
    );
  }
}

export default App;
