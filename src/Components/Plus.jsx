import React from 'react'
import { useDispatch } from 'react-redux'
import { myReducer } from '../slices/countslice';

const Plus = () => {
    let dispatch = useDispatch();
  return (
    <button onClick={()=> dispatch(myReducer())}>Plus</button>
  )
};

export default Plus 