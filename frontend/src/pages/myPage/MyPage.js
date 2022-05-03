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
  const defaultProfileImgSrc = userPhoto !== null ? 'data:image/png;base64,' + userPhoto : process.env.PUBLIC_URL + "/img/신난가지.PNG"
  const [changeInfoShow, setChangeInfoShow] = useState(false);
  const [nickname, setNickname] = useState(userNickname);
  const [profileImgSrc, setProfileImgSrc] = useState(defaultProfileImgSrc);
  const [tempImg, setTempImg] = useState(userPhoto);

  function changeInfoOn() {
    setChangeInfoShow(true);
  };

  function changeInfoDone() {
    const formData = new FormData();
    formData.append("userPhoto", tempImg);
    ChangeUserNickname({ userNickname: nickname })
    .then(() => {
      console.log("닉네임 변경 성공")
      setUserNickname(nickname);
    })
    .catch(() => {
      console.log("닉네임 변경 실패")
    })
    ChangeUserPhoto(formData)
    .then(() => {
      console.log("프로필 사진 변경 성공")
      setUserPhoto(profileImgSrc);
    })
    .catch(() => {
      console.log("프로필 사진 변경 실패")
    })
    setChangeInfoShow(false);
  }

  function changeInfoOff() {
    setNickname(userNickname);
    setProfileImgSrc(defaultProfileImgSrc);
    setTempImg(userPhoto)
    setChangeInfoShow(false);
  }
  
  useEffect(() => {
    console.log("회원 정보", userNickname)
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
          profileImgSrc={profileImgSrc}
          changeInfoShow={changeInfoShow}  
          setNickname={setNickname}
          setProfileImgSrc={setProfileImgSrc}
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