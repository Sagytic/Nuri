import React from "react";
// import Profile from "../../components/mypage/Profile";
import Record from "../../components/mypage/Record";
// import { useLocation } from "react-router-dom";
import "./MyPage.css";

function MyPage() {
  // console.log(useLocation())
  // const userData = useLocation().state.userData;
  // const setUserData = useLocation().state.setUserData;
  const defaultBackImgSrc = "/img/dogs.jpg"
  // const defaultProfileImgSrc = "/img/신난가지.PNG"

  return (
    <div className="MyPage">
      <div
        className="MyPage-backImg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + defaultBackImgSrc})`, backgroundSize: "80%" }}  
      />
      {/* <Profile profileImgSrc={defaultProfileImgSrc} userData={userData}/> */}
      <Record />
    </div>
  )
}

export default MyPage