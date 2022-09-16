import React from "react";
import './ButtonBar.css'

const ButtonBar = (props)=> {
  return (
    <div className="button-container">
      <button value={-5} onClick={props.handleIterate}>Way Back</button>
      <button value={-1} onClick={props.handleIterate}>Back</button>
      <button value={1} onClick={props.handleIterate}>Next</button>
      <button value={5} onClick={props.handleIterate}>Big Next</button>
    </div>
  )
}

export default ButtonBar