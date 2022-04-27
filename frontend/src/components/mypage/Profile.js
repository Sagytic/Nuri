import React from "react";
import { RiPencilFill, RiSettings5Fill } from "react-icons/ri";
import "./Profile.css";

function Profile({ profileImgSrc, userData }) {
  return (
    <div className="Profile">
      <div className="Profile-content">
        <img 
          className="Profile-img"
          src={process.env.PUBLIC_URL + profileImgSrc} 
          alt="프로필 이미지" 
        />
        <div className="Profile-text">
          {userData.userNickname}
          <RiPencilFill className="Profile-nickname-icon" size="30px" color="white"/>
        </div>
      </div>
      <div className="Profile-text">
        회원 정보 변경
        <RiSettings5Fill className="Profile-info-icon" size="30px" color="#FFD644" />
      </div>
    </div>
  )
}

export default Profile;