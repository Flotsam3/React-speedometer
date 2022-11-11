import {React,useReducer} from "react";
import ReactSpeedometer from "react-d3-speedometer";
import Button from "./Button";

const reduce = (state, action) => {
  switch (action.type) {
    case "on/off":
        if (state.motor === "off"){
          return {...state, motor: "on"}
        }
        return {...state, motor: "off", speed: 0}
      case "accelerate":
        if (state.motor === "on" && state.speed < 280){
          return {...state, speed: state.speed + 5}
        }
        return state
      case "brake":
        if (state.motor === "on" && state.speed > 0){
          return {...state, speed: state.speed - 5}
        }
        return state
    default:
      return state
  }
}

export default function Car() {
  const [state, dispatch] = useReducer(reduce, {motor: "off", speed: 0})
  console.log(state);

  function handleSound(){
    console.log("sound");
  }

  return <div className="car">
    {state.motor === "on" ? <ReactSpeedometer startColor="green" endColor="red" value={state.speed} currentValueText={state.speed + "km/h"} maxValue={280} customSegmentStops={[0, 50, 100, 130, 180, 230, 280]}/>: <h2>Ausgeschaltet</h2>}
    
    <div className="buttonWrapper">
      <Button value={state.motor === "on" ? "Ausschalten" : "Starten"} dispatch={dispatch} type={"on/off"}/>
      <Button value={"Gas geben"} dispatch={dispatch} type={"accelerate"} handleSound={handleSound}/>
      <Button value={"Bremsen"} dispatch={dispatch} type={"brake"}/>
    </div>
  </div>;
}
