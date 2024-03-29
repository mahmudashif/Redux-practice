import { configureStore } from "@reduxjs/toolkit";
import calculateSlice from "./slices/calculateSlice";

export default configureStore({
  reducer: {
    calculation: calculateSlice
  },
});
