import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minus } from "../slices/calculateSlice";

const Minus = () => {
  let dispatch = useDispatch();
  let inputNumber = useSelector((state) => state.calculation.inputData);
  return (
    <button
      className="bg-red-100 py-2 px-4 rounded-sm mt-2 mr-2"
      onClick={() => dispatch(minus())}
    >
      Minus {inputNumber > 0 && inputNumber}
    </button>
  );
};

export default Minus;
