import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import MemberCard from "./components/MemberCard/MemberCard";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "lightblue",
      }}
    >
      <MemberCard
        image={
          "https://media.istockphoto.com/id/538264373/photo/success-and-nothing-less.jpg?s=170667a&w=0&k=20&c=_HiOCHlczf5p3rSVAK2a4qUhC-pUThmr88A2bnB7tq0="
        }
        firstName={"Zakaria"}
        lastName={"BERRADA"}
        position={"CEO"}
        description={""}
      ></MemberCard>
      <MemberCard
        image={
          "https://media.istockphoto.com/id/538264373/photo/success-and-nothing-less.jpg?s=170667a&w=0&k=20&c=_HiOCHlczf5p3rSVAK2a4qUhC-pUThmr88A2bnB7tq0="
        }
        firstName={"Zouhair"}
        lastName={"BERRADA"}
        position={"VP"}
        description={""}
      ></MemberCard>
    </div>
  );
}

export default App;
