import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { divide } from "../slices/calculateSlice";

const Divide = () => {
  let dispatch = useDispatch();
  let inputNumber = useSelector((state) => state.calculation.inputData);

  return (
    <button
      className="bg-red-100 py-2 px-4 rounded-sm mt-2 mr-2"
      onClick={() => dispatch(divide())}
    >
      Divide by {inputNumber > 0 && inputNumber}
    </button>
  );
};

export default Divide;
