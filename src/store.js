import { configureStore } from '@reduxjs/toolkit'
import countslice from './slices/countslice'
export default configureStore({
  reducer: {

    myFirstItem : countslice

  },
})