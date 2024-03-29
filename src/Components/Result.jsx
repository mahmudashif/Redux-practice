import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  let result = useSelector((state) => state.calculation.value);

  return (
    <div>
      <h1 className="text-[26px] mb-2">Redux ToolKit</h1>
      <h1 className="text-[30px] mb-2">{result}</h1>
    </div>
  );
};

export default Result;
