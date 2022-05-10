import React, { useRef } from "react";
import InputNickname from "./InputNickname";
import "./ChangeInfo.css";
import SelectImg from "./SelectImg";

function ChangeInfo({ 
  changeInfoShow, 
  nickname,
  tempImg,
  setNickname,
  setTempImg,
  changeInfoDone, 
  changeInfoOff,
  nicknameMessage,
}) {
  const profileImgRef = useRef();

  function selectProfileImg() {
    profileImgRef.current.click();
  }

  function changeProfileImg(event) {
    //event.preventDefault();
    console.log(event.target.files);
    if (event.target.files[0]) {
      console.log(event.target.files[0])
      setTempImg(event.target.files[0])
    }
  }

  return (
    <div className="ChangeInfo-bg" style={{ visibility: changeInfoShow ? "visible" : "hidden" }}>
      <div className="ChangeInfo">
        <div className="ChangeInfo-header">
          <button className="ChangeInfo-header-button" onClick={() => changeInfoOff()}>
            취소
          </button>
          <h2>회원 정보 수정</h2>
          <button className="ChangeInfo-header-button" onClick={() => changeInfoDone()}>
            수정
          </button>
        </div>
        <ul className="ChangeInfo-content-group">
          <li className="ChangeInfo-content">
            <img 
              className="ChangeInfo-content-profile-img"
              src={typeof(tempImg) === "string" ? tempImg : URL.createObjectURL(tempImg)}
              alt="프로필 이미지" 
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <button className="ChangeInfo-content-button">
                기본 이미지에서 고르기
              </button>
              <button className="ChangeInfo-content-button" onClick={() => selectProfileImg()}>
                내 컴퓨터에서 고르기
              </button>
              <input 
                ref={profileImgRef}
                onChange={(event) => changeProfileImg(event)}
                type="file" 
                accept="image/*" 
                style={{ display: "none" }}
              />
            </div>
          </li>
          <li className="ChangeInfo-content-input">
            <p>닉네임</p>
            <InputNickname 
              nickname={nickname} 
              setNickname={setNickname} 
              nicknameMessage={nicknameMessage}
            />
            <div style={{ fontSize: "12px" }}>한글, 영어, 숫자로 이루어진 2 ~ 20자를 입력해 주세요</div>
          </li>
          <SelectImg 
            tempImg={tempImg} 
            selectProfileImg={selectProfileImg} 
            profileImgRef={profileImgRef}
            changeProfileImg={changeProfileImg}
            imgWidth="100%"
            imgHeight="120px"
            imgBorderRadius="15px"
            buttonFlexDirection="row"
          />
        </ul>
      </div>
    </div>
  )
};

export default ChangeInfo;