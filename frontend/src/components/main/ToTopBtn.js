import React from 'react';
import { useEffect, useState } from "react";
import "./ToTopBtn.css"

// function toTopBtn() {

//   function toTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth'})
//   }

//   return (
//   <div className="ToTop-Container">
//     <button onClick={toTop} className="Top-Btn">
//       <img src="./logo192.png" alt="character"/>top으로
//     </button>
//   </div>
//   )
// }

// export default toTopBtn;
// import "./App.css";

const ToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          임시TOP
        </button>
      )}
    </>
  );
};

export default ToTop;