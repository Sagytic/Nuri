import React from "react";
import "./Button.css"

function Button({ clickFunction, title, type }) {
  return (
    <button
      className={`User-button-${type}`} 
      onClick={(event) => clickFunction(event)}
    >
      {title}
    </button>
  )
};

export default Button;