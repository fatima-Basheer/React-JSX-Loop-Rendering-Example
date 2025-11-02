import { useState } from "react";
import "./App.css";
import ControlledComp from "./ControlledComp";
import GetInputVal from "./GetInputVal";
import CheckBoxes from "./CheckBoxes";
import RadioDropD from "./RadioDropD";
import LoopInJSX from "./LoopInJSX"

function App() {
    const usersData = [
    {
      name: "fatima",
      age: 22,
      prof: "Software Engineer",
      id: 1,
    },
    {
      name: "Maryum",
      age: 10,
      prof: "Software Engineer",
      id: 2,
    },
    {
      name: "Muhammad",
      age: 1.5,
      prof: "Software Engineer",
      id: 3,
    },
  ];

  return (
    <>
      {/* <GetInputVal></GetInputVal> */}
      {/* <ControlledComp></ControlledComp> */}
      {/* <CheckBoxes></CheckBoxes> */}
      {/* <RadioDropD></RadioDropD> */}
      <LoopInJSX data={usersData}></LoopInJSX>
    </>
  );
}

export default App;
