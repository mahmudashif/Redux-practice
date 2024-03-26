import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    let data = useSelector((state)=> state.myFirstItem.value)
  return (
    <h1>{data}</h1>
  )
}

export default Result