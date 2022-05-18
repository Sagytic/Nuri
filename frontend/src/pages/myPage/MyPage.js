import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../../components/mypage/Profile";
import Record from "../../components/mypage/Record";
import ChangeInfo from "../../components/mypage/ChangeInfo";
import ChangeNickname from "../../components/mypage/ChangeNickname";
import { useOutletContext } from "react-router-dom";
import { 
  ChangeUserNickname, 
  ChangeUserPhoto, 
  ChangeUserBackgroundImg,
  GetUserChallengeMath,
  GetUserSuccessMath,
  GetUserChallengeGame,
  GetUserSuccessGame,
  GetUserPractice,
} from "../../components/user/UserAxios";
import { CheckNickName } from "../../components/user/UserAxios";
import "./MyPage.css";

function MyPage() {
  const { userNickname, userPhoto, userBackImg, setUserNickname, setUserPhoto, setUserBackImg } = useOutletContext();
  const defaultBackImgSrc = userBackImg ? "data:image/png;base64," + userBackImg : process.env.PUBLIC_URL + "/img/korBack.jpg"
  const defaultProfileImgSrc = userPhoto ? 'data:image/png;base64,' + userPhoto : process.env.PUBLIC_URL + "/img/nurirang_carousel1.JPG"
  const [changeInfoShow, setChangeInfoShow] = useState(false);
  const [changeNicknameShow, setChangeNicknameShow] = useState(false);
  const [nickname, setNickname] = useState(userNickname);
  const [profileImgSrc, setProfileImgSrc] = useState(defaultProfileImgSrc);
  const [backImgSrc, setBackImgSrc] = useState(defaultBackImgSrc);
  const [tempImg, setTempImg] = useState(defaultProfileImgSrc);
  const [tempBackImg, setTempBackImg] = useState(defaultBackImgSrc);
  const [nicknameMessage, setNickNameMessage] = useState("")
  const [codeIdx, setCodeIdx] = useState(0);
  const [getCodeData, setGetCodeData] = useState(false);
  const [codeData, setCodeData] = useState(new Array(5).fill([]));
  const navigate = useNavigate();

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
      ChangeUserPhoto(formData)
      .then(() => {
        console.log("프로필 사진 변경 성공")
        let reader = new FileReader();
        reader.readAsDataURL(tempImg)
        reader.addEventListener("load", () => {
          setUserPhoto(reader.result.split(",")[1]);
        })
        reader.onload = (event) => {
          setProfileImgSrc(event.target.result)
        }
      })
      .catch(() => {
        console.log("프로필 사진 변경 실패");
      })
    }

    if (tempBackImg !== backImgSrc) {
      const formData = new FormData();
      formData.append("backgroundImage", tempBackImg);
      ChangeUserBackgroundImg(formData)
      .then(() => {
        console.log("배경 이미지 변경 성공")
        let reader = new FileReader();
        reader.readAsDataURL(tempBackImg)
        reader.addEventListener("load", () => {
          setUserBackImg(reader.result.split(",")[1]);
        })
        reader.onload = (event) => {
          setBackImgSrc(event.target.result)
        }
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
    setBackImgSrc(defaultBackImgSrc)
    setTempImg(defaultProfileImgSrc)
    setTempBackImg(defaultBackImgSrc)
    setChangeInfoShow(false);
    setChangeNicknameShow(false);
    setNickNameMessage("")
  }
  
  function saveCodeData() {
    const tempData = codeData;
    GetUserChallengeMath()
    .then((response) => {
      tempData[0] = response.data
      console.log("도전한 문제 받아오기")
    })
    .then(() => {
      GetUserSuccessMath()
      .then((response) => {
        tempData[1] = response.data
        console.log("해결한 문제 받아오기")
      })
      .then(() => {
        GetUserChallengeGame()
        .then((response) => {
          tempData[2] = response.data
          console.log("도전한 게임 받아오기")
        })
        .then(() => {
          GetUserSuccessGame()
          .then((response) => {
            tempData[3] = response.data
            console.log("해결한 게임 받아오기")
          })
          .then(() => {
            GetUserPractice()
            .then((response) => {
              tempData[4] = response.data
              console.log("혼자 연습 받아오기")
            })
            .then(() => {
              console.log("마지막");
              setCodeData(tempData);
              setGetCodeData(true);
            })
          })
        })
      })
    })
    .catch(() => {
      console.log("도전한 문제 불러오기 실패");
    })
  }


  useEffect(() => {
    
    if (localStorage.getItem("jwt") === null) {
      navigate("/user/login");
    }

    if (!getCodeData) {
      saveCodeData();
    }

    setNickname(userNickname);
    setBackImgSrc(defaultBackImgSrc);
    setProfileImgSrc(defaultProfileImgSrc);
    setTempImg(defaultProfileImgSrc);
    setTempBackImg(defaultBackImgSrc);

  }, [navigate, getCodeData, codeData, userNickname, codeIdx, defaultBackImgSrc, defaultProfileImgSrc])
  
  return (
    <div className="MyPage">
      {userNickname && <>
        <div
          className="MyPage-backImg"
          style={{ backgroundImage: `url(${backImgSrc})`, backgroundSize: "80%" }}  
        />
        <Profile profileImgSrc={profileImgSrc} userNickname={userNickname} changeInfoOn={changeInfoOn} changeNicknameOn={changeNicknameOn}/>
        <ChangeInfo 
          nickname={nickname}
          changeInfoShow={changeInfoShow}  
          tempImg={tempImg}
          tempBackImg={tempBackImg}
          nicknameMessage={nicknameMessage}
          setNickname={setNickname}
          setTempImg={setTempImg}
          setTempBackImg={setTempBackImg}
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
        {getCodeData && <Record codeData={codeData} codeIdx={codeIdx} setCodeIdx={setCodeIdx} />}
      </>}
    </div>
  )
}

export default MyPage