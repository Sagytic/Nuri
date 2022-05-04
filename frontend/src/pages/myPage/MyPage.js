import React, { useEffect, useState } from "react";
import Profile from "../../components/mypage/Profile";
import Record from "../../components/mypage/Record";
import ChangeInfo from "../../components/mypage/ChangeInfo";
import { useOutletContext } from "react-router-dom";
import { ChangeUserNickname, ChangeUserPhoto } from "../../components/user/UserAxios";
import "./MyPage.css";

function MyPage() {
  const { userNickname, userPhoto, setUserNickname, setUserPhoto } = useOutletContext();
  const defaultBackImgSrc = "/img/dogs.jpg"
  const defaultProfileImgSrc = userPhoto ? 'data:image/png;base64,' + userPhoto : process.env.PUBLIC_URL + "/img/mascot.PNG"
  const [changeInfoShow, setChangeInfoShow] = useState(false);
  const [nickname, setNickname] = useState(userNickname);
  const [profileImgSrc, setProfileImgSrc] = useState(defaultProfileImgSrc);
  const [tempImg, setTempImg] = useState(defaultProfileImgSrc);

  function changeInfoOn() {
    setChangeInfoShow(true);
  };

  function changeInfoDone() {
    
    if (nickname !== userNickname) {
      ChangeUserNickname({ userNickname: nickname })
      .then(() => {
        console.log("닉네임 변경 성공")
        setUserNickname(nickname);
      })
      .catch(() => {
        console.log("닉네임 변경 실패")
      })
    }
    
    if (tempImg !== profileImgSrc) {
      const formData = new FormData();
      formData.append("userPhoto", tempImg);
      ChangeUserPhoto(formData)
      .then(() => {
        console.log("프로필 사진 변경 성공")
        setUserPhoto(profileImgSrc);
      })
      .catch(() => {
        console.log("프로필 사진 변경 실패");
      })
    }

    setChangeInfoShow(false);
  }

  function changeInfoOff() {
    setNickname(userNickname);
    setProfileImgSrc(defaultProfileImgSrc);
    setTempImg(defaultProfileImgSrc)
    setChangeInfoShow(false);
  }
  
  useEffect(() => {
    console.log("회원 정보", userNickname);
  }, [userNickname, userPhoto])
  
  return (
    <div className="MyPage">
      {userNickname && <>
        <div
          className="MyPage-backImg"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL + defaultBackImgSrc})`, backgroundSize: "80%" }}  
        />
        <Profile profileImgSrc={profileImgSrc} userNickname={userNickname} changeInfoOn={changeInfoOn} />
        <ChangeInfo 
          nickname={nickname}
          changeInfoShow={changeInfoShow}  
          tempImg={tempImg}
          setNickname={setNickname}
          setTempImg={setTempImg}
          changeInfoDone={changeInfoDone}
          changeInfoOff={changeInfoOff} 
        />
        <Record />
      </>}
    </div>
  )
}

export default MyPage