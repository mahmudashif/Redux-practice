import React from "react";
import Plus from "./components/Plus";
import Result from "./components/Result";
import Minus from "./components/Minus";
import Divide from "./components/Divide";
import Multiplied from "./components/Multiplied";
import Input from "./components/Input";

const App = () => {
  return (
    <>
      <div className="text-center">
        <Result />
        <Input />
        <br />
        <Plus />
        <Minus />
        <Multiplied />
        <Divide />
      </div>
    </>
  );
};

export default App;
