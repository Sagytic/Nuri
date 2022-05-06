import React, { useEffect, useState } from "react";
import Profile from "../../components/mypage/Profile";
import Record from "../../components/mypage/Record";
import ChangeInfo from "../../components/mypage/ChangeInfo";
import ChangeNickname from "../../components/mypage/ChangeNickname";
import { useOutletContext } from "react-router-dom";
import { ChangeUserNickname, ChangeUserPhoto } from "../../components/user/UserAxios";
import { CheckNickName } from "../../components/user/UserAxios";
import "./MyPage.css";

function MyPage() {
  const { userNickname, userPhoto, setUserNickname, setUserPhoto } = useOutletContext();
  const defaultBackImgSrc = "/img/dogs.jpg"
  const defaultProfileImgSrc = userPhoto ? 'data:image/png;base64,' + userPhoto : process.env.PUBLIC_URL + "/img/mascot.PNG"
  const [changeInfoShow, setChangeInfoShow] = useState(false);
  const [changeNicknameShow, setChangeNicknameShow] = useState(false);
  const [nickname, setNickname] = useState(userNickname);
  const [profileImgSrc, setProfileImgSrc] = useState(defaultProfileImgSrc);
  const [tempImg, setTempImg] = useState(defaultProfileImgSrc);
  const [nicknameMessage, setNickNameMessage] = useState("")

  async function nickNameValidation() {
    const nickNameCheck = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]){2,20}$/;
    let result = false
    
    if (userNickname === nickname) {
      return true;
    }

    if (nickname === "") {
      setNickNameMessage("닉네임을 입력해 주세요")
      return
    } 
    
    if (!nickNameCheck.test(nickname)) {
      setNickNameMessage("영문, 숫자, 한글로 이루어진 2~20자 사이로 입력해 주세요")
      return
    } 
    
    await CheckNickName(nickname)
    .then((response) => {
      
      if (response.data === true) {
        setNickNameMessage("")
        result = true
      } else {
        setNickNameMessage("이미 존재하는 닉네임 입니다")
      }
    })
    .catch(() => {
      console.log("닉네임 중복 여부 확인 실패")
    })
    
    if (result) {
      return true
    }
  }

  function changeInfoOn() {
    setChangeInfoShow(true);
  };

  function changeNicknameOn() {
    setChangeNicknameShow(true);
  }

  async function changeInfoDone() {

    const nicknameCheck = await nickNameValidation();

    if (!nicknameCheck) {
      return
    }
    
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
      console.log(typeof tempImg);
      console.log("어디까지 들어가는지");
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
    setChangeNicknameShow(false);
    setNickNameMessage("")
  }

  function changeInfoOff() {
    setNickname(userNickname);
    setProfileImgSrc(defaultProfileImgSrc);
    setTempImg(defaultProfileImgSrc)
    setChangeInfoShow(false);
    setChangeNicknameShow(false);
    setNickNameMessage("")
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
        <Profile profileImgSrc={profileImgSrc} userNickname={userNickname} changeInfoOn={changeInfoOn} changeNicknameOn={changeNicknameOn}/>
        <ChangeInfo 
          nickname={nickname}
          changeInfoShow={changeInfoShow}  
          tempImg={tempImg}
          nicknameMessage={nicknameMessage}
          setNickname={setNickname}
          setTempImg={setTempImg}
          changeInfoDone={changeInfoDone}
          changeInfoOff={changeInfoOff} 
        />
        <ChangeNickname 
          nickname={nickname} 
          changeNicknameShow={changeNicknameShow}
          nicknameMessage={nicknameMessage}
          setNickname={setNickname} 
          changeInfoDone={changeInfoDone} 
          changeInfoOff={changeInfoOff} 
        />
        <Record />
      </>}
    </div>
  )
}

export default MyPage