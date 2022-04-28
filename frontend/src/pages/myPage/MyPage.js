import React, { useEffect, useState } from "react";
import Profile from "../../components/mypage/Profile";
import Record from "../../components/mypage/Record";
import ChangeInfo from "../../components/mypage/ChangeInfo";
import { useOutletContext } from "react-router-dom";
import { ChangeUserNickname } from "../../components/user/UserAxios";
import "./MyPage.css";

function MyPage() {
  const defaultBackImgSrc = "/img/dogs.jpg"
  const defaultProfileImgSrc = "/img/신난가지.PNG"
  const { userData, setUserData } = useOutletContext();
  const [changeInfoShow, setChangeInfoShow] = useState(false);
  const [nickname, setNickname] = useState(userData.userNickname);

  function changeInfoOn() {
    setChangeInfoShow(true);
  };

  function changeInfoDone() {
    setUserData({...userData, userNickname: nickname})
    ChangeUserNickname({ userNickname: nickname })
    .then(() => {
      console.log("닉네임 변경 성공")
    })
    .catch(() => {
      console.log("닉네임 변경 실패")
    })
    setChangeInfoShow(false);
  }

  function changeInfoOff() {
    setNickname(userData.userNickname);
    setChangeInfoShow(false);
  }
  
  useEffect(() => {
    console.log("회원 정보", userData)
  }, [userData])

  return (
    <div className="MyPage">
      <div
        className="MyPage-backImg"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL + defaultBackImgSrc})`, backgroundSize: "80%" }}  
      />
      {userData && <Profile profileImgSrc={defaultProfileImgSrc} userData={userData} changeInfoOn={changeInfoOn} />}
      <ChangeInfo 
        userData={userData}
        nickname={nickname}
        setNickname={setNickname}
        changeInfoShow={changeInfoShow}  
        changeInfoDone={changeInfoDone}
        changeInfoOff={changeInfoOff} 
      />
      <Record />
    </div>
  )
}

export default MyPage