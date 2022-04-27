import React from "react";
import Profile from "../../components/mypage/Profile";
import Record from "../../components/mypage/Record";
import "./MyPage.css";

function MyPage() {
  const defaultBackImgSrc = "/img/dogs.jpg"
  const defaultProfileImgSrc = "/img/신난가지.PNG"
  const userData = {
    userNickname: "지뇽지뇽지뇽지뇽지뇽지뇽지뇽지뇽지뇽지뇽",
    userProfile: "없음",
  }

  return (
    <div className="MyPage">
      <div
        className="MyPage-backImg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + defaultBackImgSrc})`, backgroundSize: "80%" }}  
      />
      <Profile profileImgSrc={defaultProfileImgSrc} userData={userData}/>
      <Record />
    </div>
  )
}

export default MyPage