import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { multiplied } from "../slices/calculateSlice";

const Multiplied = () => {
  let dispatch = useDispatch();
  let inputNumber = useSelector((state) => state.calculation.inputData);

  return (
    <button
      className="bg-green-200 py-2 px-4 rounded-sm mt-2 mr-2"
      onClick={() => dispatch(multiplied())}
    >
      Multiplied by {inputNumber > 0 && inputNumber}
    </button>
  );
};

export default Multiplied;
