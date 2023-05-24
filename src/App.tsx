import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HierachyLayout from "./layouts/HierachyLayout/HierachyLayout";
import { hierarchy } from "./services/data";

function App() {
  return <HierachyLayout hierarchy={hierarchy} />;
}

export default App;
