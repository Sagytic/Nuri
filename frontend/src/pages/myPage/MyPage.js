import React from "react";
import "./MyPage.css";

function MyPage() {
  const defaultImgSrc = "/img/dogs.jpg"
  return (
    <div className="MyPage">
      <div
        className="MyPage-backImg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + defaultImgSrc})`, backgroundSize: "80%" }}  
      >

      </div>
    </div>
  )
}

export default MyPage