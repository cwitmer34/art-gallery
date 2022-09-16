import React from "react";
import './Gallery.css'


function Gallery(props) {
  return (
    <div className="art-container">
      <img className="image" src={props.objectImg} alt={props.title} onClick={props.iterate}/>
      <h2>{props.title}</h2>
      <h3>{props.artist}</h3>
    </div>
  )
}

export default Gallery