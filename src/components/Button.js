import React from 'react'

export default function Button({value, dispatch, type}) {
  return (
    <button onClick={()=>dispatch({type: type})}>{value}</button>
  )
}
