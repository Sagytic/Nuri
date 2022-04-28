import React, { useRef } from "react";
import server from "../../API/server";
import "./ChangeInfo.css";

function ChangeInfo({ userData, changeInfoShow, nickname, setNickname, changeInfoDone, changeInfoOff }) {
  const defaultProfileImgSrc = process.env.PUBLIC_URL + "/img/신난가지.PNG";
  const profileImgSrc = userData.userPhoto ? server.BASE_URL + userData.userPhoto : defaultProfileImgSrc;
  const profileImgRef = useRef();
  

  function selectProfileImg() {
    profileImgRef.current.click();
  }

  function changeProfileImg(event) {
    event.preventDefault();
    console.log(event.target.files[0].name);
  }

  function changeNickname(event) {
    event.preventDefault();
    setNickname(event.target.value.replace(" ", ""))
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
              src={profileImgSrc}
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
          <li className="ChangeInfo-content">
            <div>닉네임</div>
            <input value={nickname} onChange={(event) => changeNickname(event)} />
          </li>
        </ul>
      </div>
    </div>
  )
};

export default ChangeInfo;