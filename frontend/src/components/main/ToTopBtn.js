import React from 'react';
import "./ToTopBtn.css"

function toTopBtn() {

  function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'})
  }

  return (
  <div className="ToTop-Container">
    <button onClick={toTop} className="Top-Btn">
      <img src="./logo192.png" alt="character"/>top으로
    </button>
  </div>
  )
}

export default toTopBtn;