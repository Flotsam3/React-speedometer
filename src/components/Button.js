import React from 'react'

export default function Button({value, dispatch, type}) {
  return (
    <button onClick={()=>dispatch({type: type})} onMouseDown={()=>dispatch({type: type, payload: "soundOn"})} onMouseUp={()=>dispatch({type: type, payload: "soundOff"})}>{value} </button>
  )
}
