import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import HierachyLayout from "./layouts/HierachyLayout/HierachyLayout";

type MemberInfo = {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  position: string;
  description: string;
};

type Member = {
  memberInfo: MemberInfo;
  subordinates: Member[];
};

type Hierarchy = {
  root: Member;
};

const zouhair: Member = {
  memberInfo: {
    id: 2,
    firstName: "Zakaria",
    lastName: "BERRADA",
    position: "CEO",
    description: "",
    image:
      "https://media.istockphoto.com/id/1309328823/fr/photo/verticale-headshot-de-lemploy%C3%A9-masculin-de-sourire-dans-le-bureau.jpg?b=1&s=612x612&w=0&k=20&c=Y8DpRjL_WZSVmV9LEMAJgogYMGMkqQsvcZ2Nb5LBmrk=",
  },
  subordinates: [],
};

const zakaria: Member = {
  memberInfo: {
    id: 1,
    firstName: "Zakaria",
    lastName: "BERRADA",
    position: "CEO",
    description: "",
    image:
      '"https://media.istockphoto.com/id/538264373/photo/success-and-nothing-less.jpg?s=170667a&w=0&k=20&c=_HiOCHlczf5p3rSVAK2a4qUhC-pUThmr88A2bnB7tq0="',
  },
  subordinates: [zouhair],
};

const hierarchy: Hierarchy = {
  root: zakaria,
};

function App() {
  console.log(hierarchy);
  return <HierachyLayout />;
}

export default App;
