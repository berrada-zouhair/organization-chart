import React from "react";
import "./App.css";
import { createRoot } from "./services/data";
import HierarchyLayout from "./layouts/HierachyLayout/HierachyLayout";

function App() {
  return <HierarchyLayout root={createRoot()} />;
}

export default App;
