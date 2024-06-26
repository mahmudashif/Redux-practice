import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',

  //current state 


  initialState: {
    value: 0,
  },
  reducers: {
    myReducer: (state) => {
      state.value++
    },
    myReducerMinus: (state) => {
        state.value--
    },
    myReducerSqure: (state) => {
        state.value--
    },
    // myReducerSquare: (state) => {
    //     state.value += 2
    // },
  },
})

// Action creators are generated for each case reducer function
export const { myReducer, myReducerMinus } = counterSlice.actions

export default counterSlice.reducer