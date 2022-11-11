import React from 'react'

export default function Button({value, dispatch, type, handleSound}) {
  return (
    <button onClick={()=>dispatch({type: type})} onMouseDown={value==="Gas geben"? handleSound : null}>{value}</button>
  )
}
