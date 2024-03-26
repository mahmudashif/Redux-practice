import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',

  //current state 


  initialState: {
    value: 0,
  },
  reducers: {
    myReducer: (state) => {
    //   state.value += 1
    console.log("Ami Ashif Number ",state);
    },
  },
})

// Action creators are generated for each case reducer function
export const { myReducer } = counterSlice.actions

export default counterSlice.reducer