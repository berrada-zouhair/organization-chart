import React from "react";
import "./App.css";
import { createMembers, createRoot } from "./services/data";
import HierarchyLayout from "./layouts/HierachyLayout/HierachyLayout";
import GroupMemberCards from "./components/GroupMemberCards/GroupMemberCards";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        padding: "10px 0",
      }}
    >
      <HierarchyLayout root={createRoot()} />
      <GroupMemberCards members={createMembers(3)} />
    </div>
  );
}

export default App;
